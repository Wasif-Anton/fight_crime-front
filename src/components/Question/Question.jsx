import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./Question.css"

export default class Question extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Question Number 1</p>
                </div>
                <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <i class="ri-star-line"></i>
                </div>
            </div>
        )
    }
}