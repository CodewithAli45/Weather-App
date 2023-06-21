import React from 'react';
import '../styles/Input.css'
export const InputCity = ({cityName, handleCityName}) => {

    return (
        <div className='dropdown-bg'>
            <input 
                type="text" 
                value={cityName} 
                onChange={handleCityName}
                placeholder='Enter city name' 
            />
        </div>
    );
}

