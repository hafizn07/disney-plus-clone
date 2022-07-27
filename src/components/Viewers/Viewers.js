import React from 'react'
import './Viewers.css'

function Viewers() {
    return (
        <div className='view_container'>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Assets/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Assets/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Assets/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Assets/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="wrap-card">
                <img src="/Assets/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/Assets/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Viewers