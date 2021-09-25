import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./QuestionTask.css"

export default class Status extends Component {
    render() {
        return (
            <div>
                {/* Good Job */}
                <div className="all">
                    <p>Good Job <i class="ri-thumb-up-line"></i></p>
                    <p>You Have Done 1/40 Tasks!</p>
                    <p>Keep Going 😊</p>
                </div>
            </div>
        )
    }
}
