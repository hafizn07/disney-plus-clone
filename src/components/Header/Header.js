/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import styled from 'styled-components'
import './Header.css'

function Header() {
  return (
    
        <div className="navBar">
            <div className="logo">
                <img src="/Assets/images/logo.svg" alt="logo" />
            </div>
            <div className="NavMenu">
                <a>
                    <img src="/Assets/images/home-icon.svg" alt='' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/Assets/images/search-icon.svg" alt='' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/Assets/images/watchlist-icon.svg" alt='' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/Assets/images/original-icon.svg" alt='' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/Assets/images/movie-icon.svg" alt='' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/Assets/images/series-icon.svg" alt='' />
                    <span>SERIES</span>
                </a>

            </div>

            <div className="NavUser">
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
            </div>

        </div>
       
  )
}

export default Header
