// @flow 
import React from 'react';
import './topbar.css'

const Topbar = () => {
    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" />
        
            <button type='submit'>Submit</button>
        </div>
    );
};

export default Topbar;