import React, { PureComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Sidebar extends PureComponent {
    render() {
        return (
            <div class="page-sidebar">
                <div class="logo-box"><a href="#" class="logo-text">Connect</a><a href="#" id="sidebar-close"><i class="material-icons">close</i></a> <a href="#" id="sidebar-state"><i class="material-icons">adjust</i><i class="material-icons compact-sidebar-icon">panorama_fish_eye</i></a></div>
                <div class="page-sidebar-inner slimscroll">
                    <ul class="accordion-menu">
                        <li class="sidebar-title">
                            Apps
                        </li>
                        <li class="active-page">
                            <NavLink to='/dashboard' activeClassName="active"><i class="material-icons-outlined">dashboard</i>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile' activeClassName="active"><i class="material-icons-outlined">account_circle</i>Profile</NavLink>
                        </li>
                        <li>
                            <Link to='/notifications'><i class="material-icons-outlined">inbox</i>Notification</Link>
                        </li>
                        <li class="sidebar-title">
                            Admin
                        </li>
                        <li>
                            <Link to='/admin/add-drinks'><i class="material-icons">bookmark_border</i>Add Beer</Link>
                        </li>
                        <li>
                            <Link to='/admin/viewdrinks'><i class="material-icons">access_time</i>View Drinks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
