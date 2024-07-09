async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Detroit&minDate=2024-10-01&maxDate=2024-10-23&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e148a48a45msh84218d60c03c15fp1f6832jsn4bd857b958f8',
            'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        document.getElementById("concerts").innerHTML = result.data.map(item => `<li>${item.name}</li>`).join('');
    } catch (error) {
        console.error(error);
    }
}
fetchData();