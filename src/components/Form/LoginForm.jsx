import React, { Component } from 'react'
import "./Form.css"

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <form className="login-form" method="post">
                    {/* Email */}
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="name@example.com"/>
                    {/* Password */}
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password"/>
                    {/* Submit Button */}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
