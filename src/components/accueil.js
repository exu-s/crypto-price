import React from 'react'
import './recherche-accueil.css'
import logo from './logo.png'

const Accueil = () => {
    return (
        <div className="r-a">
            <img className="logo" src={logo} alt='img' />
            <p>Hello Friend,</p>
            <p>
                At its most basic a cryptocurrency is a digital asset that utilizes computer code and blockchain technology to operate
            </p>
            <p>
                somewhat on its own
                without the need for a central party be that a person, company, central bank or government —
                to manage the system.
            </p>
            <a href="/recherche">CLICK ME</a>
        </div>
    )
}

export default Accueil;
