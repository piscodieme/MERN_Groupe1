import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PageNotFound extends Component {

    render() {
        return (
            <>
            {/*  Blank area start */}
            <div class="blank-page-area pb-100px pt-100px bgi-404"/*  data-bg-image="assets/images/404/404.jpg" */>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="page-not-found text-center">
                                <h2>Oops!</h2>
                                <p>Sorry,Page Not Found.</p>
                                <a href="/">Back To Home <i class="fa fa-home"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Blank area end */}
            </>
        )
    }
}

PageNotFound.propTypes = {

}

export default PageNotFound