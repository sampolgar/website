import React from 'react'
import CardBodyTextCards from './CardBodyTextCardHolder'

export default CardBody => {
    return (
        <div className="card-body">
            <CardBodyTextCards  heading="About" body="I'm an engineer working in Sydney, I like going out to the cinema"/>
            
            <CardBodyTextCards  heading="Interests" body="I enjoy cooking and surfing and eating"/>
        </div>   
    )
}