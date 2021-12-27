import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BreadCrumb from '../../components/utilities/BreadCrumb';
import OurHistories from '../../components/about/OurHistories';
import AboutMember  from '../../components/about/AboutMember';
import ClientsSays from '../../components/about/ClientsSays';
import Partener from '../../components/about/Partener';

class About extends Component {

    render() {
        return (
            <>
                <BreadCrumb
                     title1 = "About Us"
                     title2 = "About"
                />
                <OurHistories/>
                <AboutMember/>
                <ClientsSays/>
                <Partener/>
            </>
        )
    }
}

About.propTypes = {

}

export default About