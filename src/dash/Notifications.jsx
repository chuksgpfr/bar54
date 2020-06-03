import React, { Component } from 'react'
import Sidebar from '../component/sidebar.component'
import DashHeader from '../component/dashheader.component'

export default class Notifications extends Component {
    render() {
        return (
            <div class="connect-container align-content-stretch d-flex flex-wrap">
                {/* <div class='loader'>
            <div class='spinner-grow text-primary' role='status'>
                <span class='sr-only'>Loading...</span>
            </div>
        </div> */}
                <Sidebar />
                <div class="page-container">
                    <DashHeader />

                    <div class="page-content">

                    <div class="main-wrapper">
                        <div class="profile-content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="post">
                                                <div class="post-header">
                                                    <img src={require('../component/assets/images/avatars/profile-image-3.jpg')}/>
                                                    <div class="post-info">
                                                        <span class="post-author">Notifications </span><br/>
                                                        <span class="post-date">All your notifications on BAR54</span>
                                                    </div>
                                                    <div class="post-header-actions">
                                                        <a href="#"><i class="fa fa-bell"></i></a>
                                                    </div>
                                                </div>
                                                
                                                <div class="post-actions">
                                                    <ul class="list-unstyled">
                                                        {/* <li>
                                                            <a href="#" class="like-btn"><i class="fa fa-heart"></i>Like</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="fa fa-comment"></i>Comment</a>
                                                        </li> */}
                                                        <li>
                                                            <a href="#"><i class="fa fa-share"></i>Go to Dashboard</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="post-comments">
                                                    <div class="post-comm">
                                                        <img src={require('../component/assets/images/avatars/profile-image-2.png')} class="comment-img"/>
                                                        <div class="comment-container">
                                                            <span class="comment-author">
                                                                Title
                                                                <small class="comment-date">5min</small>
                                                            </span>
                                                        </div>
                                                        <span class="comment-text">
                                                            Notifications description
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        )
    }
}
