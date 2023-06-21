import React, { useState } from 'react';
import { Dropdown } from './components/Dropdown';
import { InputCity } from './components/InputCity';
import {InputLatLon} from './components/InputLatLon';
import {InputZipcode} from './components/InputZipcode'
import axios from 'axios';
import { WeatherDisplay } from './components/WeatherDisplay';
import {AiTwotoneHeart, AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import './styles/App.css'

export const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cityName, setCityName] = useState('');
  const [zipcode, SetZipcode] = useState('');
  const [selectedOption, setSelectionOption] = useState('');
  const [weather, setWeather] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);

  function handleOptionChange(e){
    setSelectionOption(e.target.value);
  }

  function handleCityName(e){
    setCityName(e.target.value);
  }

  function handleLatitude(e){
    setLatitude(e.target.value);
  }

  function handleLongitude(e){
    setLongitude(e.target.value);
  }

  function handleZipcode(e){
    SetZipcode(e.target.value);
  }

  const getWeatherDetails = async (e) => {
    e.preventDefault();
    try {
      let response;
      if(selectedOption === 'cityName'){
        response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&aqi=yes`);
      } else if(selectedOption === 'latlon'){
        response =await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}&aqi=yes`)
      } else if(selectedOption === 'zipcode'){
        response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&aqi=yes`)
      }
      const responseData = response.data;
      console.log(responseData?.location);
      setWeather(responseData);
      setIsDisplay(true);
    } catch (error) {
      console.log("Error in fetching data ", error);
    }
  }
    
  return (
    <div id='weathers'>
      <h2 className='weathers-text'>My Weather App</h2>
      <p className='weathers-intro'>A weather app which gives current weather of location provided by the user input. To get started choose options to select and fill the input field. For easy understanding, examples are provided inside input box. .....</p>
      <form  onSubmit={getWeatherDetails}>
        <div className="weather-search">
          <div className="dropdown">
            <div className="dropdown-text">Search By : </div>
            <Dropdown selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            {
              selectedOption === 'cityName' && (
                <div className="dropdown-cityname">
                  <InputCity value={cityName} handleCityName={handleCityName} />
                </div>
              )
            }
            {
              selectedOption === 'latlon' && (
                <div className="dropdown-latlon">
                  <InputLatLon latitude={latitude} longitude={longitude} handleLatitude={handleLatitude} handleLongitude={handleLongitude} />
                </div>
              )
            }
            {
              selectedOption === 'zipcode' && (
                <div className="dropdown-zipcode">
                  <InputZipcode value={zipcode} handleZipcode={handleZipcode} />
                </div>
              )
            }
          </div>
        </div>
        <button type='submit'>Get Weather</button>
      </form>
      {
        isDisplay && <WeatherDisplay weather={weather} />
      }
      <footer>
        <p>Made with <span className='heart'> <AiTwotoneHeart /> </span> By <span className='username'>Ali Murtaza</span> </p> 
        <div className="contacts">
          <a href="https://github.com/CodewithAli45" target='none'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/ali-murtaza-4b9077236/" target='none'><AiFillLinkedin /></a>
          <a href="ali.my0304@outlook.com" target='none'><AiOutlineMail /></a>
        </div>
        
      </footer>
    </div>
  );
}
