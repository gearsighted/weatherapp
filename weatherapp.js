const form = document.querySelector('#citySearch')
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const userSearch = form.elements.query.value
    const config = {params: {q: userSearch} {}}
})



// pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}