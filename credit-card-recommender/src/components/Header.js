import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> Movie Picker</h1>
            <div className="links">
                <Link to="/showsuggestion">Show Card Recommendation</Link>
                <Link to="/">Homepage</Link>
                <Link to="/addcard">Add a Card</Link>
                <Link to="/addpriority">Choose Your Priority</Link>
            </div>
        </div>
    )
}

export default Header