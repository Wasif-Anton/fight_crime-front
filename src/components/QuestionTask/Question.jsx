import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./QuestionTask.css"

export default class Question extends Component {
    constructor(prop) {
        super(prop);
        this.state.Question = [
            { "question 1": "Many worries, often seems worried" },
            { "question 2": "Rather solitary, tends to play alone" },
            { "question 3": "Generally liked by other children" },
            { "question 4": "To what extent do you feel nervous or tense on this ward?" }
        ];
    }
    // changeQustion = () => {
    //     this.setState
    // }

    render() {
        return (
            <div>
                <div className="all">
                    <p>1. Help your mother cleaning the dishes</p>
                    <p>Please fill the questions below</p>
                    <p>Help your mother cleaning the dishes</p>
                </div>
                <p>What was the name of the one you helped</p>
                <div className="all-rate">
                    {/* Not Happy */}
                    <div className="star-rating">
                        <i class="ri-star-line"></i>
                        <label for="">Not Happy</label>
                    </div>
                    {/* Meh */}
                    <div className="star-rating">
                        <i class="ri-star-half-fill meh"></i>
                        <label for="">Meh</label>
                    </div>
                    {/* Very Happy */}
                    <div className="star-rating">
                        <i class="ri-star-fill very-happy"></i>
                        <label for="">Very Happy</label>
                    </div>
                </div>
            </div>
        )
    }
}