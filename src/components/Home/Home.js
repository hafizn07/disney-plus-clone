import React from 'react'
import ImageSlider from '../Image slider/ImageSlider'
import Movies from '../Movies/Movies'
import Viewers from '../Viewers/Viewers'
import './Home.css'

function Home() {
    return (
        <div className="main_section">
            <ImageSlider />
            <Viewers />
            <Movies />
            
        </div>

    )
}

export default Home