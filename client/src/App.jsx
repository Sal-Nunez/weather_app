import './App.css'
import Home from './views/Home'

const App = () => {

    const api_key = '75aecf1e93859f55562ef3839ff57613'
    return (
        <Home api_key={api_key} />
    )
}

export default App