const buttonElement = document.getElementById('check');
buttonElement?.addEventListener('click',()=>{
    const cityInput = (<HTMLInputElement>document.getElementById('city')).value.trim();
    if(cityInput !== ''){
            getData(cityInput)
    }
})


async function getData(city:string):Promise<void>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e1a674760feae07f2412a46634136e7f`   

   try {
    const fetchData =await fetch(url)
    const data = await fetchData.json()
    displayData(data)
   } catch (error) {
        console.error(error)
   }
}

    function displayData(data:any) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    if (weatherInfoDiv) {
        weatherInfoDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    } else {
        console.error('weatherInfoDiv is null. Cannot display weather information.');
    }
}