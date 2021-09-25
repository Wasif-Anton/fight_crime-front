import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./QuestionTask.css"

export default class Question extends Component {
    constructor(prop) {
        super(prop);
        this.state.Question = [
            { "question 1": "I have many worries, I often feel worry" },
            { "question 2": "Generally I feel liked by other children" },
            { "question 3": "I feel nervous or tense on this school ward" },
            { "question 4": "I am Kind to younger children" }
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