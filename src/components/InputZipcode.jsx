import React from 'react';
import '../styles/Input.css'
export const InputZipcode = ({zipcode, handleZipcode}) => {

    return (
        <div className='dropdown-bg'>
            <input 
                type="text" 
                value={zipcode} 
                onChange={handleZipcode}
                placeholder='Enter zipcode, only works for US, UK' 
            />
        </div>
    );
}

