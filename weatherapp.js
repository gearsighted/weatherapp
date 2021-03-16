const form = document.querySelector('#citySearch')
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const userSearch = form.elements.query.value
    const config = {params: {
        q: userSearch, 
        appid: '48200952b4f6813efdefdcdfc6490d97'
        }
    }    
    const res = await axios.get('pro.openweathermap.org/data/2.5/forecast/hourly', config)
    console.dir(res);
})



// pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}