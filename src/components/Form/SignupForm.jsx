import React, { Component } from 'react'
import "./Form.css"

export default class SignupForm extends Component {
    render() {
        return (
            <div>
                <form className="signup-form" method="post">
                    {/* First Name */}
                    <label for="firstName">First Name:</label>
                    <input type="text" name="firstName" placeholder="First Name" autofocus/>
                    {/* Last Name */}
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="lastName"placeholder="Last Name"/>
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
