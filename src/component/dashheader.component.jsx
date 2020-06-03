import React, { PureComponent } from 'react'
import $ from 'jquery';

import './assets/css/custom.css';

export default class DashHeader extends PureComponent {
    componentDidMount(){

        const script = document.createElement("script");
        script.src = "./js/connect.min.js";
        script.async = true;
        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src = "./js/pages/dashboard.js"
        script1.async = true;
        document.body.appendChild(script1);

        
    }
    render() {
        return (
            <div class="page-header">
                    <nav class="navbar navbar-expand">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul class="navbar-nav">
                            <li class="nav-item small-screens-sidebar-link">
                                <a href="#" class="nav-link"><i class="material-icons-outlined">menu</i></a>
                            </li>
                            <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={require('../component/assets/images/avatars/profile-image-1.png')} alt="profile image"/>
                                    <span>Chuks Ubah</span><i class="material-icons dropdown-icon">keyboard_arrow_down</i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Profile <span class="badge badge-pill badge-info float-right">2</span></a>
                                    <a class="dropdown-item" href="#">Settings &amp; Privacy</a>
                                    <a class="dropdown-item" href="#">Go to Bar</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a href="#" class="nav-link"><i class="material-icons-outlined">mail</i></a>
                            </li> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link notification">
                                    <i class="material-icons-outlined">
                                    notifications
                                    <span class="badge">3</span>
                                </i></a>
                                
                            </li>
                            {/* <li class="nav-item">
                                <a href="#" class="nav-link" id="dark-theme-toggle"><i class="material-icons-outlined">brightness_2</i><i class="material-icons">brightness_2</i></a>
                            </li> */}
                        </ul>
                        {/* <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Tasks</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Reports</a>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div class="navbar-search">
                            <form>
                                <div class="form-group">
                                    <input type="text" name="search" id="nav-search" placeholder="Search..."/>
                                </div>
                            </form>
                        </div> */}
                    </nav>
                </div>
        )
    }
}
