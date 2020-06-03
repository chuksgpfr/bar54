import React, { Component } from 'react'


//import '../component/assets/plugins/font-awesome/css/all.min.css';
import '../component/assets/css/connect.min.css';
import { Link } from 'react-router-dom';
//import '../component/assets/css/dark_theme.css';
//import '../component/assets/css/custom.css';

export default class Login extends Component {
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
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                                        </div>
                                        
                                        <button type="submit" class="btn btn-block" style={{backgroundColor:"#F9A826"}}>Sign In</button>

                                        <Link to='/register'>Don't have an account yet ?</Link>

                                        <div class="auth-options">
                                            <div class="custom-control custom-checkbox form-group">
                                                <input type="checkbox" class="custom-control-input" id="exampleCheck1"/>
                                                <label class="custom-control-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                            <Link to='/forgotpassword' class="forgot-link">Forgot Password?</Link>
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
