import React from 'react';
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
    }

    let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <h2>Weather App</h2>
    );

}