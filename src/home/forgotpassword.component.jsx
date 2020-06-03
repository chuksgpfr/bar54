import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class ForgotPassword extends PureComponent {
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
                                        
                                        <button type="submit" class="btn btn-block" style={{backgroundColor:"#F9A826"}}> Send Code</button>

                                        <Link to='/register'>Don't have an account yet ?</Link>
                                        
                                        {/* <div class="auth-options">
                                            <div class="custom-control custom-checkbox form-group">
                                                <input type="checkbox" class="custom-control-input" id="exampleCheck1"/>
                                                <label class="custom-control-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                        </div> */}
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
