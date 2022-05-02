import { useLocation, useNavigate } from 'react-router-dom'
import config from "../../config"


function SportEdit() {
    const location = useLocation()
    const navigate = useNavigate()

    let sport = location.state && location.state.sport ? location.state.sport : {}

    function handleNameChange(e) {
        sport.name = e.target.value
    }
    
    function handleSubmit(e) {
        const url = `${config.API_URL}/sport/index.php${location.state ? `?id=${sport.id}` : ''}`
        const method = location.state ? 'PUT' : 'POST'
        const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
        const auth = `Basic ${credentials}`

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': auth },
            body: JSON.stringify(sport),
        }).then(res => {
            if (res.ok) {
                navigate('/sports')
            } else if (res.message) {
                // TODO: hiba kezelés
            }
        }).catch(() => { })

        e.preventDefault()
    }

    return (
        <div>
            <h1>{location.state ? 'Sportág szerkesztése' : 'Új sportág'}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Sportág neve</label>
                    <input type="text" className="form-control" id="name" placeholder="pl: jéghoki"
                        onChange={handleNameChange} defaultValue={sport.name} />
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Mentés</button>
                </div>
            </form>
        </div>
    )

}

export default SportEdit;