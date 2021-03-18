const key = config.appid;
const form = document.querySelector('#citySearch');
const cityHeader = document.querySelector('#cityHeader');
const tempList = document.querySelector('#temp')

form.addEventListener('submit', async function (e){
    e.preventDefault();
    const userSearch = form.elements.query.value
    const details =  {params: 
        {q: userSearch,
         appid: key,
         units: 'metric',   
        }}
    try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', details)

        const tempData= res.data.main.temp;
        
        cityHeader.innerText = `Here is the weather in ${userSearch}`
        tempList.innerText = `The temperature is ${tempData} degrees celcius.`

        console.log(res.data)
    } catch (e) {
        console.log(e);
    }   
    
});



const printWeatherList = () => {
   
}

// .weather.0.description
// .main.temperature
// .main.temperature