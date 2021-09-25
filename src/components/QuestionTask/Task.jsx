import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./QuestionTask.css"

export default class Task extends Component {
    render() {
        return (
            <div>
                {/* Tasks */}
                <div className="all">
                    {/* Small title */}
                    <p>Tasks:</p>
                    {/* The Tasks */}
                    <p>
                        Help your mother washing the dishes
                        <input type="checkbox" id="" name="" value=""></input>
                    </p>
                    <p>
                        Help your father cleaning the garden
                        <input type="checkbox" id="" name="" value=""></input>
                    </p>
                    <p>
                        Help your mother cleaning the house
                        <input type="checkbox" id="" name="" value=""></input>
                    </p>
                    <p>
                        Give your mother a gift<i class="ri-gift-line"></i>
                        <input type="checkbox" id="" name="" value=""></input>
                    </p>
                </div>
            </div>
        )
    }
}
