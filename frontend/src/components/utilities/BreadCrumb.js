import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BreadCrumb extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {
          title1,
          title2
          } = this.props;
          
        return (
            <>
                {/*  breadcrumb-area start*/}
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-12 text-center">
                            <h2 class="breadcrumb-title">{title1}</h2>
                            {/*  breadcrumb-list start*/}
                            <ul class="breadcrumb-list">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">{title2}</li>
                            </ul>
                            {/*  breadcrumb-list end*/}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

BreadCrumb.propTypes = {

}

export default BreadCrumb