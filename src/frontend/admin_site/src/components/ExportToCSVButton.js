import config from '../config'

function exportToCSV(e) {
    const url = `${config.API_URL}/export/index.php`
    const credentials = window.btoa(`${config.API_USER}:${config.API_PWD}`)
    const auth = `Basic ${credentials}`
    fetch(url, {headers: {'Authorization': auth}})
        .then(res => res.json())
        .then(data => {
            const csvHeader = Object.keys(data[0]).join() + '\n'
            const csvData = data.map((record) => Object.values(record).join(';')).join('\n')
        
            const blob = new Blob(["\ufeff", csvHeader, csvData])
        
            const link = document.createElement("a")
            link.download = `${new Date().toISOString()}.csv`
            link.href = URL.createObjectURL(blob)
            link.click()
            URL.revokeObjectURL(link.href)
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