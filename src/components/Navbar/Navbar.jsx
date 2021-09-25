import React, { Component } from 'react'
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="nav-bar">
                <img src="" alt="Logo"/>
                    <li>About Us</li>
                    <li>Team</li>
                    <li>Project</li>
                    <li>Statistics</li>
                    <li>Join</li>
                </ul>
            </div>
        )
    }
}