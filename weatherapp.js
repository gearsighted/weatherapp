const key = config.appid;
const form = document.querySelector('#citySearch');
const cityHeader = document.querySelector('#cityHeader');
const tempList = document.querySelector('#temp')
const weatherList = document.querySelector('#weather')
const humidityList = document.querySelector('#humidity')

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
        const weatherData = res.data.weather[0].description;
        const humidityData = res.data.main.humidity;
        
        cityHeader.innerText = `Here is the weather in ${userSearch}`
        tempList.innerText = `The temperature is ${tempData} degrees celcius.`
        weatherList.innerText = `The current condition is ${weatherData}.`
        humidityList.innerText = `The current humdity is ${humidityData}%.`

        console.log(res.data)
    } catch (e) {
        console.log(e);
    }   
    
});