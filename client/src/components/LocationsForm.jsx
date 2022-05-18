import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

const LocationsForm = props => {

    const { user, setUser } = props
    const [newLocation, setNewLocation] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post('http://localhost:8000/api/users/locations/add', { id: user.id, location: newLocation }, { withCredentials: true })
            .then(res => setUser({...res.data, id: res.data._id}))
    }

    const deleteLocation = (i) => {
        axios.post('http://localhost:8000/api/users/locations/remove', { id: user.id, locationIndex: i, locations: user.locations }, { withCredentials: true})
        .then(res => {
            setUser({...res.data, id: res.data._id})

        })
    }

    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-black" id="contained-modal-title-vcenter">
                        Add/Remove Locations
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-black d-flex">

                        <form className="" onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label className="me-3">Add Location: </label><br />
                                <input onChange={e => setNewLocation(e.target.value)} type="text" value={newLocation} />
                            </div>
                            <button className="btn btn-primary px-16 mt-3" >Add Location</button>
                        </form>
                        <div className="ms-3 border border-dark" ></div>
                        <div className="ms-3 h-52 overflow-auto">
                            {
                                user ?
                                    user.locations.map((location, i) =>
                                    <div key={i}>

                                        <div className="d-flex mt-2 justify-end">
                                            <span>{location}</span>
                                            <span className="border border-dark mx-2"></span>
                                            <Button onClick={e => deleteLocation(i)} className="btn btn-danger me-1" >Delete</Button>
                                        </div>
                                        <div className="border border-dark my-2"></div>
                                    </div>
                                    )
                                    : null
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}

export default LocationsForm