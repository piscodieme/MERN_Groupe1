import React, { Component } from 'react';
import IntroSlide from '../../components/slide/IntroSlide';
import Banner from '../../components/contains/Banner';
import PaymentMode from '../../components/contains/PaymentMode';
import Categories from '../../components/contains/Categories';
import Testimonial from '../../components/contains/Testimonial';
import BestSellerPage from '../../components/contains/BestSellerPage';
import PropTypes from 'prop-types'
import {categoryService} from '../../service/categoryService';
import {productService} from '../../service/productService';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            dataCategories:[],
            errorMessage:'',
            dataProduct:[],
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
            });
        await productService.getAllProducts()
            .then(res=>{
                const products = res;
                this.setState({dataProduct:products})
                console.log("data products hommme ++++++ ",this.state.dataProduct);
            })
            .catch(error => {
                this.setState({errorMessage:"Error Get All Product"})
                console.log("message erreur ==== ",this.state.errorMessage,"++++Error++++",error)})
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
                    dataProduct = {this.state.dataProduct}
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