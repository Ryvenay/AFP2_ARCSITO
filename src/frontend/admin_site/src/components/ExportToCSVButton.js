import config from '../config'

function exportToCSV(e) {
    const url = `${config.API_URL}/export/index.php`
    const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
    const auth = `Basic ${credentials}`
    fetch(url, {headers: {'Authorization': auth}})
        .then(res => res.json())
        .then(data => {
            let csvHeader = Object.keys(data[0]).join() + '\n'
            let csvData = data.map((record) => Object.values(record).join(';')).join('\n')
            let csvContents = csvHeader + csvData
        
            let blob = new Blob([csvContents])
        
            let event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            })
        
            let element = document.createElement("a")
        
            element.download = `${new Date().toISOString()}.csv`
            element.href = URL.createObjectURL(blob)
            element.dispatchEvent(event)
        })
}


function ExportToCSVButton() {
    return (
        <button id='exportToCSVButton' onClick={exportToCSV}
            className='btn btn-primary btn-lg'>
            CSV export
        </button>
    )
}

export default ExportToCSVButton;