import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PageNotFoundError from '../../components/error/PageNotFound';
import BreadCrumb from '../../components/utilities/BreadCrumb';

class PageNotFound extends Component {
    render() {
        return (
            <>
                 <BreadCrumb
                     title1 = "404"
                     title2 = "404"
                />
                <PageNotFoundError/>
            </>
        )
    }
}

PageNotFound.propTypes = {

}

export default PageNotFound