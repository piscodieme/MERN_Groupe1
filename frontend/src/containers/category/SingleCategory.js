import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCategoryPage from '../../components/Category/SingleCategoryPage';
import BreadCrumb from '../../components/utilities/BreadCrumb';


class SingleCategory extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <BreadCrumb
                    title1 = "Nos Categories"
                    title2 ="CategoryName"
                />
                <SingleCategoryPage/>
            </>
        )
    }
}

SingleCategory.propTypes = {

}

export default SingleCategory