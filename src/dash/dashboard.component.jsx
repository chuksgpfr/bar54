import React, { PureComponent } from 'react'
import Sidebar from '../component/sidebar.component'
import DashHeader from '../component/dashheader.component'

export default class Dashboard extends PureComponent {
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
                        {/* <div class="page-info">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                        <div class="page-options">
                            <a href="#" class="btn btn-secondary">Settings</a>
                            <a href="#" class="btn btn-primary">Upgrade</a>
                        </div>
                    </div> */}
                        <div class="main-wrapper">
                            <div class="row stats-row">
                                <div class="col-lg-3 col-md-12">
                                    <div class="card card-transparent stats-card">
                                        <div class="card-body">
                                            <button style={{
                                                backgroundColor: '#F9A826',
                                                padding: '2%',
                                                borderRadius: '5%'
                                            }}>
                                                <div class="stats-info text-center">
                                                    <h4 class="text-white">BUY BEER FOR A FRIEND</h4>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="card card-transparent stats-card">
                                        <div class="card-body">
                                            <button style={{
                                                backgroundColor: '#F9A826',
                                                padding: '2%',
                                                borderRadius: '5%'
                                            }}>
                                            <div class="stats-info text-center">
                                                <h4 class="text-white">BUY BEER FOR YOURSELF</h4>
                                            </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="card card-transparent stats-card">
                                        <div class="card-body">
                                            <button style={{
                                                backgroundColor: '#F9A826',
                                                padding: '2%',
                                                borderRadius: '5%'
                                            }}>
                                                <div class="stats-info text-center">
                                                <h4 class="text-white">START A PARTY MODE</h4>
                                            </div>
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="card card-transparent stats-card">
                                        <div class="card-body">
                                            <button style={{
                                                backgroundColor: '#F9A826',
                                                padding: '2%',
                                                borderRadius: '5%'
                                            }}>
                                            <div class="stats-info text-center">
                                                <h4 class="text-white">SELL BEER FROM YOUR BAR</h4>
                                            </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card savings-card">
                                        <div class="card-body">
                                            <h5 class="card-title">Amount Spent<span class="card-title-helper"></span></h5>
                                            <div class="savings-stats">
                                                <h5>&#8358;4,502.00</h5>
                                                <span>Total amount of drinks bought</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card top-products">
                                        <div class="card-body">
                                            <h5 class="card-title">Latest Orders<span class="card-title-helper">Today</span></h5>
                                            <div class="top-products-list">
                                                <div class="product-item">
                                                    <h5>Order #4563</h5>
                                                    <span>&#8358;4,000</span>
                                                    <i class="material-icons product-item-status product-item-success">arrow_upward</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">For a friend</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">For yourself</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Party mode</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="card mt-3">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table className="table table-stripped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order ID</th>
                                                                            <th>Drinks</th>
                                                                            <th>Description</th>
                                                                            <th>Location</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <caption>Drinks you bought for a friend</caption>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="card mt-3">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table className="table table-stripped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order ID</th>
                                                                            <th>Drinks</th>
                                                                            <th>Description</th>
                                                                            <th>Location</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <caption>Drinks you bought for yourself</caption>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                <div className="card mt-3">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table className="table table-stripped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order ID</th>
                                                                            <th>Drinks</th>
                                                                            <th>Description</th>
                                                                            <th>Location</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <caption>Drinks you bought for party mode</caption>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
