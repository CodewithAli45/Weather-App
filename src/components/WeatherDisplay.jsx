import React from 'react';
import '../styles/WeatherDisplay.css'
export const WeatherDisplay = ({weather}) => {
    return (
        <div className="weather-display">
            <div className="weather-location">
                <div className="location-details">
                <h3>Location Details</h3>
                <div>Name - <span>{weather?.location?.name}</span> </div>
                <div>Region - <span>{weather?.location?.region}</span> </div>
                <div>Country - <span>{weather?.location?.country}</span></div>
                <div>Latitude - <span>{weather?.location?.lat}</span> </div>
                <div>Longitude - <span>{weather?.location?.lon}</span> </div>
                <div>Local Time - <span>{weather?.location?.localtime}</span> </div>
                </div>
            </div>
            <div className="weather-current">
                <h3>Current weather</h3>
                <div>Conditions - <span >{weather?.current?.condition?.text}</span></div>
                <div>Temperature - <span className='temp'>{weather?.current?.temp_c}(°C)</span> </div>
                <div>
                Wind - <span>{weather?.current?.wind_kph} km/hr {weather.current?.wind_degree}° {weather?.current?.wind_dir}</span> 
                </div>
                <div>Pressure - <span>{weather?.current?.pressure_mb} bar</span> </div>
                <div>Precipation - <span>{weather?.current?.precip_mm} mm</span> </div>
                <div>Humidity - <span>{weather?.current?.humidity} %</span> </div>
            </div>
        </div>
    );
}

