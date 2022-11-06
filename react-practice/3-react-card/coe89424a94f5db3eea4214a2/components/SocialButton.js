import React from 'react'

export default function SocialButton(props) {
    return (
        <div className="social-button-div">
             <button className="social-button">
                <img className="social-button-logo" src={props.logo}/>
                <p className="social-button-text">{props.buttonText}</p>
                <link href={props.link}/>
            </button>
        </div>
    )
};