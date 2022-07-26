/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login_container'>
            <div className="content_login">
                <img className='logo-one' src="/Assets/images/cta-logo-one.svg" alt="" />
                <a className='signup_button'>GET ALL THERE</a>
                <p className="description_login">
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </p>
                <img className='logo-two' src="/Assets/images/cta-logo-two.png" alt="" />
            </div>
        </div>
    )
}

export default Login