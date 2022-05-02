import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import config from "../../config"

function EventEdit() {
    const location = useLocation()
    const navigate = useNavigate()

    const [isLoaded, setIsLoaded] = useState(false)
    const [sports, setSports] = useState([])

    let event = location.state && location.state.event ? location.state.event : {}

    useEffect(() => {
        if (!isLoaded) {
            const url = `${config.API_URL}/sport/index.php`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setSports(data)
                    setIsLoaded(true)
                })
        }
    })

    function handleNameChange(e) {
        event.name = e.target.value;
    }

    function handleSportChange(e) {
        event.sport_id = sports[e.target.value].id;
    }

    function handleDateChange(e) {
        event.date = e.target.value;
    }

    function handleSubmit(e) {
        const url = `${config.API_URL}/event/index.php${location.state ? `?id=${event.id}` : ''}`
        const method = location.state ? 'PUT' : 'POST'
        const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
        const auth = `Basic ${credentials}`

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': auth },
            body: JSON.stringify(event),
        }).then(res => {
            if (res.ok) {
                navigate('/events')
            } else if (res.message) {
                // TODO: hiba kezelés
            }
        }).catch(() => { })


        e.preventDefault()
    }

    return (
        <div>
            <h1>{location.state ? 'Esemény szerkesztése' : 'Új esemény'}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Esemény neve</label>
                    <input type="text" className="form-control" id="name" placeholder="pl: úszóbajnokság"
                        onChange={handleNameChange} defaultValue={event.name} />
                </div>
                <div className="mb3">
                    <label htmlFor="sport_name">Sportág</label>
                    <select id='sport_name' className="form-select" 
                        defaultValue={location.state ? sports.findIndex(s => s.id === event.sport_id) : 0}
                        onChange={handleSportChange}>
                        <option value='0' disabled>Kérem válassza ki a sportágat!</option>
                        {sports.map((s, index) =>
                            <option key={s.id} value={index}>{s.name}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Esemény dátuma</label>
                    <input type="datetime-local" className="form-control" id="date" placeholder="pl: úszóbajnokság"
                        onChange={handleDateChange} defaultValue={event.date} />
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Mentés</button>
                </div>
            </form>
        </div>
    )
}

export default EventEdit