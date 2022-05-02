import {useState, useEffect} from 'react'
import config from '../../config'
import {Link} from 'react-router-dom'


function SportList() {
    const [sports, setSports] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

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

    function deleteSport(id) {
        const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
        const auth = `Basic ${credentials}`
        const url = `${config.API_URL}/sport/index.php?id=${id}`
        fetch(url, {method: 'DELETE', headers: {'Authorization': auth}})
            .then(res => {
                if (res.ok) {
                    setSports(sports.filter(s => s.id !== id))
                }
                else {
                    // TODO: hiba kezelés
                }
            })
    }

    return (
        <div id="sportList">
            <Link to='/sports/new' className='btn btn-primary'>Új sportág</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                    </tr>
                </thead>
                <tbody>
                    {sports.map((sport, _index) => {
                        return (
                            <tr key={sport.id}>
                                <td>{sport.id}</td>
                                <td>{sport.name}</td>
                                <td>
                                    <Link className='btn btn-secondary btn-sm' 
                                        to={`/sports/${sport.id}`} state={{sport: sport}}>Módosít</Link><br/>
                                    <button className='btn btn-danger btn-sm'
                                         onClick={() => deleteSport(sport.id)}>
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

export default SportList;