import React from 'react'

export default function CardBodyTextCards(props) {
    return (
        <div className="card-body-text-card">
            <h3 className="card-body-text-heading">{props.heading}</h3>
            <p className="card-body-text">{props.body}</p>
        </div>
    )
}