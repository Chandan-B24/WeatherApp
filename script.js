"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const buttonElement = document.getElementById('check');
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const cityInput = document.getElementById('city').value.trim();
    if (cityInput !== '') {
        getData(cityInput);
    }
});
function getData(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e1a674760feae07f2412a46634136e7f`;
        try {
            const fetchData = yield fetch(url);
            const data = yield fetchData.json();
            displayData(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function displayData(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    if (weatherInfoDiv) {
        weatherInfoDiv.innerHTML = `
            <h2 style={color : 'white'}>${data.name}, ${data.sys.country}</h2>
            <p style={color : 'white'}>Temperature: ${data.main.temp}°C</p>
            <p style={color : 'white'}>Weather: ${data.weather[0].main}</p>
            <p style={color : 'white'}>Description: ${data.weather[0].description}</p>
        `;
    }
    else {
        console.error('weatherInfoDiv is null. Cannot display weather information.');
    }
}
