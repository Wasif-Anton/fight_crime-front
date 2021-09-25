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
                    <div className="tasks"> 
                        <p>Help your mother washing the dishes</p>
                        <input type="checkbox" id="" name="" value=""></input>
                    </div>
                    <div className="tasks"> 
                        <p>Help your father cleaning the garden</p>
                        <input type="checkbox" id="" name="" value=""></input>
                    </div>
                    <div className="tasks"> 
                        <p>Help your mother cleaning the house</p>
                        <input type="checkbox" id="" name="" value=""></input>
                    </div>
                    <div className="tasks"> 
                        <p>Give your mother a gift<i class="ri-gift-line"></i></p>
                        <input type="checkbox" id="" name="" value=""></input>
                    </div>
                </div>
            </div>
        )
    }
}
