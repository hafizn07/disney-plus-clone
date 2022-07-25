import React from 'react'
import ImageSlider from '../Image slider/ImageSlider'
import Viewers from '../Viewers/Viewers'
import './Home.css'

function Home() {
    return (
        <div className="main_section">
            <ImageSlider />
            <Viewers />
            
        </div>

    )
}

export default Home