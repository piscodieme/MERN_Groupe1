import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{ Tab, TabList, TabPanel, Box, TabContext, Tabs} from 'react-tabs';
import {productService} from '../../service/productService';
import AddToCartButton from '../utilities/AddToCartButon';

let data= [];
let token = ''

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productCategories:[]
        }

    }
    componentDidMount() {
         token = sessionStorage.getItem("token");
    }

    addToCard = () =>{
       
        if(token){

        }
    }

    addImage =(url)=>{
        console.log("test == ",url);
        const newUrl = url.substring(20);
        console.log("nouveau chemin iamge ========",newUrl);
        return(
            <img src={newUrl} alt="Product" ></img>
        )
    }

    addImageCategorie = (item) =>{
        if(item){
            const url = item.substring(20);
            return(
                <img src={url} alt=""/>
            )
        }
    }

    handleTabChange = (item) => {
        console.log("test tabs");
        return productService.getProductsByCategory(item)
            .then(res =>{
                data = res;
                console.log(data)
                //this.setState({productCategories:data})               
            })      
            .catch(error =>{
                console.log("error error error",error);
            })
    }
    render() {
        const {
            dataCategories,
            dataProduct,
        }=this.props;
        console.log("data Categories =====",dataCategories);
        console.log("data Product Categooriesss =====",dataProduct);
        console.log("dataaaaaa ====  ",data);
        return (
            <>
            <div class="product-area">
                <div class="container">
                    <div class="row">
                        {/* Section Title Start */}
                        <div class="col-12">
                            <div class="section-title text-center mb-60px">
                                <h2 class="title">Les Categories phares</h2>
                                <p>Voici ci-dessus les categories les plus visitées  </p>
                            </div>
                        </div>
                        {/* Section Title End */}
                    </div>
                   
                    <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                            <div class="login-register-wrapper">
                                <div class="product-tab-nav nav">
                                    
                                    {dataCategories.map((data,index)=>(
                                        <a class="text-list-category" href={"/category/"+data._Name} key={index}>
                                        <figure>
                                            {this.addImageCategorie(data._Image)}
                                            <figcaption><span>{data._Name}</span></figcaption>
                                        </figure>
                                    </a>
                                    ))}
                                
                                </div>
                            </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="mt-5">
                                {/* 1st tab start */}
                                <div class="" id="" >
                                    <div class="row">
                                        {dataProduct.map((items, index)=>(
                                        
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" key={index}>
                                        {index < 8 ? (
                                            <div>                                            {/* Single Prodect */}
                                            <div class="product">
                                                <div class="thumb">
                                                    <a href={"/produit/"+items._id} class="image">
                                                       {this.addImage(items._Images._Frame)}
                                                       {/*  <img class="hover-image" src="assets/images/product-image/3.jpg" alt="Product" ></img> */}
                                                    </a>
                                                    <span class="badges">
                                                        <span class="new">Sale</span>
                                                        <span class="sale">-10%</span>
                                                        <span class="new">New</span>
                                                    </span>
                                                   
                                                </div>
                                                <div class="content">
                                                    <span class="ratings">
                                                        <span class="rating-wrap">
                                                            <span class="star" Style="width: 100%"></span>
                                                    </span>
                                                    <span class="rating-num">( 5 Review )</span>
                                                    </span>
                                                    <h5 class="title"><a href={"/produit/"+items._id}>{items._Title}
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">{items._Princing._Price} Fcfa</span>
                                                    </span>
                                                </div>
                                                <AddToCartButton
                                                    product = {items}
                                                />
                                               {/*  <button title="Add To Cart" class="add-to-cart">Add
                                                    To Cart</button> */}
                                            </div>
                                            </div>

                                            ) : ""}
                                        </div>
                                        
                                        ))}
                                    </div>
                                </div>
                                {/* 1st tab end */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

Categories.propTypes = {

}

export default Categories