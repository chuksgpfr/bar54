import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends PureComponent {
    render() {
        return (
            <div class="auth-page sign-in">
            <div class="connect-container align-content-stretch d-flex flex-wrap">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="auth-form">
                            <div class="row">
                                <div class="col">
                                    <div class="logo-box"><a href="#" class="logo-text">BAR 54</a></div>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter first name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter last name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter age"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password" placeholder="Confirm password"/>
                                        </div>
                                        <button type="submit" class="btn btn-block" style={{backgroundColor:"#F9A826"}}> Register Now</button>
                                        <Link to='/login'>Already have an account yet ?</Link>
                                        <div class="auth-options">
                                            <div class="custom-control custom-checkbox form-group">
                                                <input type="checkbox" class="custom-control-input" id="exampleCheck1"/>
                                                <label class="custom-control-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block d-xl-block">
                        <div class="auth-image"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
