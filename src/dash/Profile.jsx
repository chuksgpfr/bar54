import React, { Component } from 'react'
import Sidebar from '../component/sidebar.component'
import DashHeader from '../component/dashheader.component'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
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
                        <div class="profile-header">
                            <div class="row">
                                <div class="col">
                                    <div class="profile-img">
                                        <img src={require('../component/assets/images/avatars/profile-image-1.png')}/>
                                    </div>
                                    <div class="profile-name">
                                        <h3 className='text-dark'>Chuks Ubah</h3>
                                        <span>Seller on Bar54</span>
                                    </div>
                                    <div class="profile-menu">
                                        <ul className='text-dark'>
                                            <li>
                                                <Link to=''>Edit Profile</Link>
                                            </li>
                                            
                                        </ul>
                                        <div class="profile-status">
                                            <i class="active-now"></i> Active now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-content">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="post">
                                                <div class="post-header">
                                                    <img src={require('../component/assets/images/avatars/profile-image-3.jpg')}/>
                                                    <div class="post-info">
                                                        <span class="post-author">Afam's Bar</span><br/>
                                                        <span class="post-date">3hrs</span>
                                                    </div>
                                                    <div class="post-header-actions">
                                                        <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                                                    </div>
                                                </div>
                                                <div class="post-body">
                                                    <p>These are all your notifications from Afam's bar</p>
                                                    <img src={require('../component/assets/images/post-1.jpg')} class="post-image" alt=""/>
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
                                                            <a href="#"><i class="fa fa-share"></i>Go to Afam's Bar</a>
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
                                                            Mauris ultrices convallis massa, nec facilisis enim interdum ac.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    {/* <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">About</h5>
                                            <ul class="list-unstyled profile-about-list">
                                                <li><i class="material-icons">school</i><span>Studied Mechanical Engineering at <a href="#">Carnegie Mellon University</a></span></li>
                                                <li><i class="material-icons">work</i><span>Former manager at <a href="#">Stacks</a></span></li>
                                                <li><i class="material-icons">my_location</i><span>From <a href="#">Boston, Massachusetts</a></span></li>
                                                <li><i class="material-icons">rss_feed</i><span>Followed by 716 people</span></li>
                                                <li>
                                                    <button class="btn btn-block btn-primary m-t-lg">Follow</button>
                                                    <button class="btn btn-block btn-secondary m-t-lg">Message</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Contact Info</h5>
                                            <ul class="list-unstyled profile-about-list">
                                                <li><i class="material-icons">mail_outline</i><span>chuks@minimax.com</span></li>
                                                <li><i class="material-icons">home</i><span>Lives in <a href="#">Surulere, Lagos</a></span></li>
                                                <li><i class="material-icons">local_phone</i><span>+234 (80) 2901 1680</span></li>
                                            </ul>
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
