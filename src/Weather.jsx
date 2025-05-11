import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import search_icon from './assets/search.png';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import humidity_icon from './assets/humidity.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import wind_icon from './assets/wind.png';

const App = () => {
const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  

  // to do add icons by using link of weather app
  const allIncons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  }

  const api_key = import.meta.env.VITE_APP_ID

  const search = async (city) => {
    if(city===""){
      alert("Please enter a city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.cod === "404") {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      console.log(data);

      const icon = allIncons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })


    } catch (error) {
         console.error("Error in fetching weather data");
    }
  }

  useEffect(() => {
    search("Muzaffarnagar");
  }, [])

  return (
    // Main container with a gradient background and centered content
    <div className='min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center'>

      {/* Card container for weather information */}
      <div className='bg-white p-8 rounded-lg shadow-2xl w-96'>

        {/* Search bar section */}
        <div className='border-4 border-blue-500 rounded-full p-2 flex items-center justify-between mb-6'>
          {/* Input field for city search */}
          <input
            ref={inputRef}
            className='w-full px-4 py-2 text-gray-700 rounded-l-full focus:outline-none'
            type='text'
            placeholder='Search for a city...'
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                search(inputRef.current.value);
              }
            }}
          />
          {/* Search button with an icon */}
          <img
            className='w-8 h-8 p-1 bg-blue-500 rounded-full cursor-pointer'
            alt='search icon'
            src={search_icon}
             onClick={() => search(inputRef.current.value)}
          />
        </div>

        {/* Weather display section */}
        <div className='text-center mb-6'>
          {/* Weather condition icon */}
          <img className='w-20 h-20 mx-auto' src={weatherData.icon} alt='clear icon' />
          {/* Temperature display */}
          <p className='text-4xl font-bold text-gray-800'>{weatherData.temperature}°C</p>
          {/* City name display */}
          <p className='text-lg text-gray-600'>{weatherData.location}</p>
        </div>

        {/* Weather details section */}
        <div className='grid grid-cols-2 gap-4 text-center'>
          {/* Humidity card */}
          <div className='flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-blue-400 p-2 rounded-full mb-2 flex items-center justify-center'>
              <img className='w-8 h-8' src={humidity_icon} alt="humidity icon" />
            </div>
            <p className='text-lg font-semibold text-blue-800'>{weatherData.humidity}%</p>
            <span className='text-sm text-blue-600'>Humidity</span>
          </div>

          {/* Wind speed card */}
          <div className='flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-blue-500 p-2 rounded-full mb-2 flex items-center justify-center'>
              <img className='w-8 h-8' src={wind_icon} alt='wind icon' />
            </div>
            <p className='text-lg font-semibold text-blue-800'>{weatherData.wind}km/h</p>
            <span className='text-sm text-blue-600'>Wind Speed</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
