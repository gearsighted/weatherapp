let key = config.appid;

const form = document.querySelector('#citySearch')

form.addEventListener('submit', async function (e){
    e.preventDefault();
    const userSearch = form.elements.query.value
    const details =  {params: 
        {q: userSearch,
         appid: key,   
        }}
    try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', details)
    console.dir(res);
    } catch (e) {
        console.log(e);
    }   
    
});