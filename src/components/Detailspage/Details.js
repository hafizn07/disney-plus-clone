import React from 'react'
import './Details.css'

function Details() {
    return (
        <div className='detail_container'>
            <div className="background">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </div>
            <div className="image_title">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </div>
            <div className="controls_section">
                <button className="play_Button">
                    <img src="/Assets/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </button>
                <button className="trailer_Button">
                    <img src="/Assets/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </button>
                <button className="add_Button">
                    <span>+</span>
                </button>
                <button className="groupmatch_Button">
                    <img src="/Assets/images/group-icon.png" alt="" />
                </button>
            </div>
            <div className="subtitle_details">
                2018 7m Family, Fantasy, Kids, Animation
            </div>
            <div className="description_details">
                A Chinese mom who's sad when her grown son leaves home gets another
                chance at motherhood when one of her dumplings springs to life. But she finds
                that nothing stays cute and small forever.
            </div>
        </div>
    )
}

export default Details