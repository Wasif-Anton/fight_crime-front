import React, { Component } from 'react'
import google from "../../img/google.png" // Adding the img
import "./Volunteer.css"

export default class Volunteer extends Component {
    render() {
        return (
            <div className="vol-top">
                {/* Volunteer img */}
                <img className="vol-img" src={google} alt="i" />
                {/* Buttom text */}
                <div className="vol-text">
                    <h1>aaaaaaaaa</h1>
                    <h3>aaaaaaaaa</h3>
                </div>
            </div>
        )
    }
}