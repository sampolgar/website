import React from 'react'
import SocialButton from './SocialButton'

export default SocialNavBar => {
    return (
        <nav className="social-navbar">
            <SocialButton logo="../assets/linkedin.png" link="https://www.linkedin.com/" buttonText="LinkedIn" />
            <SocialButton logo="../assets/email.png" link="https://www.linkedin.com/" buttonText="Email" />
        </nav>
    )
}