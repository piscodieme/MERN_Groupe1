import React, { Component } from 'react';
import IntroSlide from '../../components/slide/IntroSlide';
import Banner from '../../components/contains/Banner';
import PaymentMode from '../../components/contains/PaymentMode';
import Categories from '../../components/contains/Categories';
import Testimonial from '../../components/contains/Testimonial';
import BestSellerPage from '../../components/contains/BestSellerPage';
import PropTypes from 'prop-types'
import {categoryService} from '../../service/categoryService'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            dataCategories:[],
            errorMessage:''
        }
    }
    async componentDidMount(){
        await categoryService.getAllCategories()
            .then(res =>{
                const Categories = res;
                this.setState({dataCategories:Categories});
                console.log("daata Catagories ????? ",Categories);
            })
            .catch(error =>{
                this.setState({errorMessage:"Get All Categories Error"});
                console.log("error Message ====",this.state.errorMessage);
            })
    }

    render() {
        return (
            <>
                <section>
                    <IntroSlide/>
                </section>
                <BestSellerPage/>
                <Categories
                    dataCategories = {this.state.dataCategories}
                />
                <Banner/>
                <PaymentMode/>
                <Testimonial/>
                <br/>
                
            </>
        )
    }
}

Home.propTypes = {

}

export default Home