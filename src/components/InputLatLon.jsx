import React from 'react';
import '../styles/Input.css'
export const InputLatLon = ({
    latitude, handleLatitude, 
    longitude, handleLongitude, 
}) => {

    return (
        <div className='dropdown-bg'>
            <input 
                type="text" className='input-bg'
                value={latitude} 
                onChange={handleLatitude}
                placeholder='Enter latidude e.g.: 20.456' 
            />
            <input 
                type="text" 
                value={longitude} 
                onChange={handleLongitude}
                placeholder='Enter longitude e.g.: 85.684' 
            />
        </div>
    );
}

