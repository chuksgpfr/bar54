import React, { Component } from 'react'
import DashHeader from '../component/dashheader.component'
import Sidebar from '../component/sidebar.component'

export default class AddDrinks extends Component {
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
                                        <p class="page-desc">This form is used to create new drink catalogue that can be sold by vendors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Create Drinks Catalogue</h5>
                                            {/* <p>Here’s a quick example to demonstrate Bootstrap’s form styles. </p> */}
                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Drink Type</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mixers" />
                                                    <small id="emailHelp" class="form-text text-muted">Drink category (e.g. Lager, stout etc.)</small>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Drinks</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="star,gulder,..." />
                                                    <small id="emailHelp" class="form-text text-muted">Drinks for this category, separate each drinks with a comma (star,gulder,hero)</small>
                                                </div>
                                                <div class="custom-control custom-checkbox form-group">
                                                    <input type="checkbox" class="custom-control-input" id="exampleCheck1" />
                                                    <label class="custom-control-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
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