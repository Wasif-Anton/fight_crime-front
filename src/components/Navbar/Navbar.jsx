import React, { Component } from 'react'
import "./Navbar.css"
import Logo from "../../img/Talens.png"

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-bar">
                <img src={Logo} alt="Logo"/>
                    <li>About Us</li>
                    <li>Team</li>
                    <li>Project</li>
                    <li>Statistics</li>
                    <li>Join</li>
                </ul>
            </nav>
        )
    }
}