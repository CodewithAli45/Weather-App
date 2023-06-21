import React from 'react';
import '../styles/Dropdown.css'
export const Dropdown = ({selectedOption, handleOptionChange}) => {
    return (
        <div className='dropdown-bg'>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Input Format</option>
                <option value="cityName">City Name</option>
                <option value="latlon">Latitude & Longitude </option>
                <option value="zipcode">Zipcode </option>
            </select>
        </div>
    );
}
