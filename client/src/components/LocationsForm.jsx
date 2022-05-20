import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import CloseButton from '../assets/CloseButton'
import HappySun from '../assets/images/happy_sun.gif'

const LocationsForm = props => {
    const { user, setUser, locationsError, setLocationsError, onHide, show } = props
    const [newLocation, setNewLocation] = useState("")
    const [primaryLocation, setPrimaryLocation] = useState(user ? user.locations[0] : null)
    const scrollElement = useRef()

    const scrollToBot = () => {
        scrollElement.current.scroll({ top: scrollElement.current.scrollHeight, behavior: 'smooth' })
    }

    const onSubmitHandler = (e) => {
        setLocationsError("")
        e.preventDefault()

        axios.post('http://localhost:8000/api/users/locations/add', { id: user.id, location: newLocation }, { withCredentials: true })
            .then(res => {
                if (res.data.msg) {
                    setLocationsError(res.data.msg)
                } else {
                    setUser({ ...res.data, id: res.data._id })
                    scrollToBot()
                }
            })
    }

    const deleteLocation = (i) => {
        axios.post('http://localhost:8000/api/users/locations/remove', { id: user.id, locationIndex: i, locations: user.locations }, { withCredentials: true })
            .then(res => {
                setUser({ ...res.data, id: res.data._id })
            })
    }

    const changePrimaryLocation = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/locations/changePrimary', { id: user.id, location: primaryLocation, locations: user.locations }, {withCredentials: true})
            .then(res => setUser({...res.data, id: res.data._id}))

    }

    return (

        <Modal show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="container"
        >

            <Modal.Header className="bg-gray-700">
                <Modal.Title className="bg-gray-700" id="contained-modal-title-vcenter">
                    Add/Remove Locations
                </Modal.Title>
                <CloseButton onHide={onHide} />
            </Modal.Header>
            <Modal.Body className="bg-gray-700">
                <div className="bg-gray-700 d-flex justify-content-between inside-modal">
                    <form className="mb-3" onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            <input className="form-control" placeholder=" Add Location Here..." onChange={e => setNewLocation(e.target.value)} type="text" value={newLocation} />
                        </div>
                        {
                            locationsError ?
                                <p className="text-danger">{locationsError}</p>
                                : null
                        }
                        <button className="btn btn-primary"  >Add Location</button>
                    </form>
                    <div className="m-3 border border-dark" ></div>
                    <div className="mb-3 d-flex">

                        <div ref={scrollElement} className="ms-3 h-52 overflow-y-auto ">
                            {
                                user ?
                                user.locations.map((location, i) =>
                                <div key={i}>

                                            <div className="d-flex mt-2 justify-end">
                                                <span>{`${location}${i === 0 ? '*' : ""}`}</span>
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
                                <div className="m-3 border border-dark" ></div>
                    <span className="absolute bottom-1 right-1" >*Primary Location</span>
                        <div className="d-flex flex-1 justify-between mb-3">

                        <img className="w-10 h-10" src={HappySun} alt="" />
                        
                        <form onSubmit={changePrimaryLocation} >
                            <select onChange={e => setPrimaryLocation(e.target.value)} value={primaryLocation} className="form-select" >
                            {
                                user ?
                                    user.locations.map((location, i) =>
                                    <option key={i} value={location}>{`${location}${i === 0 ? '*' : ""}`}</option>
                                        
                                    )
                                    : null
                            }
                            </select> <br />
                            <button className="btn btn-primary">Change Primary</button>
                        </form>
                        <img className="w-10 h-10" src={HappySun} alt="" />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-gray-700">
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default LocationsForm