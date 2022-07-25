import React from 'react'
import './Viewers.css'

function Viewers() {
    return (
        <div className='view_container'>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-disney.png" alt="" />
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-pixar.png" alt="" />
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-marvel.png" alt="" />
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-starwars.png" alt="" />
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-national.png" alt="" />
            </div>
        </div>
    )
}

export default Viewers