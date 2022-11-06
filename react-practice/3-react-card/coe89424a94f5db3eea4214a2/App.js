import React from 'react'
import Navbar from './components/Navbar'
import HeroPhoto from './components/HeroPhoto'
import CardBody from './components/CardBody'

export default App => {
    return (
        <div className="container">
            <HeroPhoto />
            <CardBody />
            <Navbar />
        </div>
    )
}