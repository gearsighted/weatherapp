let key = config.appid;

const form = document.querySelector('#citySearch')

form.addEventListener('submit', async function (e){
    e.preventDefault();
    const userSearch = form.elements.query.value
    const details =  {params: 
        {q: userSearch,
         appid: key,   
        }}
    const res = await axios.get('api.openweathermap.org/data/2.5/weather', details)
    console.dir(res);
});