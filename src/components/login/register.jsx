import React from "react";
import loginImage from "../../login.jpg";

export class Register extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="First name">First name</label>
                        <input type="text" name="First name" placeholder="First name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Last name">Last name</label>
                        <input type="text" name="Last name" placeholder="Last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email address">Email address</label>
                        <input type="text" name="Email address" placeholder="Email address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn"> Register</button>
            </div>
        </div>

    }
}
