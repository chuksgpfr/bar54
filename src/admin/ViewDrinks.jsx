import React, { Component } from 'react'
import DashHeader from '../component/dashheader.component'
import Sidebar from '../component/sidebar.component'

export default class ViewDrinks extends Component {
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
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="page-title">
                                     <p class="page-desc">All drinks sold on Bar54</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Create Drinks Catalogue</h5>
                                            {/* <p>Here’s a quick example to demonstrate Bootstrap’s form styles. </p> */}
                                            <div className="table-responsive">
                                                <table className='table table-bordered table-striped thead-dark'>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Drinks</th>
                                                            <th>Date</th>
                                                            <th>Edit</th>
                                                        </tr>
                                                    </thead>
                                                </table>
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
