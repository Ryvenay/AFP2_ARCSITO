import {useState, useEffect} from 'react'
import config from '../../config'
import {Link} from 'react-router-dom'
import QRCode from 'qrcode'


function EventList() {
    const [events, setEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(!isLoaded) {
            const url = `${config.API_URL}/event/index.php`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setEvents(data)
                    setIsLoaded(true)
                })
        }
    })

    async function getQRCode(uuid) {
        QRCode.toString(uuid, (err, svgData) => {
            const blob = new Blob([svgData])

            const link = document.createElement("a")

            link.download = `${uuid}.svg`
            link.href = URL.createObjectURL(blob)
            link.click()
            URL.revokeObjectURL(link.href)
        })
    }

    
    function deleteEvent(uuid) {
        const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
        const auth = `Basic ${credentials}`
        const url = `${config.API_URL}/event/index.php?id=${uuid}`
        fetch(url, {method: 'DELETE', headers: {'Authorization': auth}})
            .then(res => {
                if (res.ok) {
                    setEvents(events.filter(e => e.id !== uuid))
                }
                else {
                    // TODO: hiba kezelés
                }
            })
    }

    return (
        <div id="eventList">
            <Link to='/events/new' className='btn btn-primary'>Új esemény</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Név</th>
                        <th>Sportág</th>
                        <th>Dátum</th>
                        <th>Műveletek</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, _index) => {
                        return (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.name}</td>
                                <td>{event.sport_id}</td>
                                <td>{event.date}</td>
                                <td>
                                    <button className='btn btn-primary btn-sm' onClick={() => getQRCode(event.id)}>
                                        QR-kód letöltése
                                        </button><br/>
                                    <Link className='btn btn-secondary btn-sm' 
                                        to={`/events/${event.id}`} state={{event: event}}>Módosít</Link><br/>
                                    <button className='btn btn-danger btn-sm'
                                         onClick={() => deleteEvent(event.id)}>
                                             Töröl
                                             </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} 

export default EventList