import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {cartService} from '../../service/cartService'
import AddToCartButton from '../utilities/AddToCartButon'
//import history from './history'

let token = ''
class ProductsList extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){
        token = sessionStorage.getItem("token");
       
    }

    addImage = (item)=>{
        if(item){
            const url = item.substring(20);
            return(
                <img src={url} alt="Product" />
            )
        }
    }

    render() {
        const  {
            dataProduct,
        }=this.props;
        console.log("tooookennnnn  ====> ",token);
        return (
            <>
                                <div class="shop-bottom-area">

                                    {/*  Tab Content Area Start */}
                                    <div class="row">
                                        <div class="col">
                                            <div class="tab-content">
                                                <div class="tab-pane fade show active" id="shop-grid">
                                                    <div class="row mb-n-30px">
                                                        {dataProduct.map((data,index)=>(
                                                        
                                                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up"
                                                            data-aos-delay="200">
                                                            {/*  Single Prodect */}
                                                            <div class="product">
                                                                <div class="thumb">
                                                                    <a href={"/produit/"+data._id} class="image">
                                                                       {this.addImage(data._Images._Frame)} 
                                                                       {/*  <img class="hover-image"
                                                                            src="assets/images/product-image/1.jpg" alt="Product" /> */}
                                                                    </a>
                                                                    <span class="badges">
                                                                        <span class="new">New</span>
                                                                    </span>
                                                                    
                                                                </div>
                                                                <div class="content">
                                                                    <span class="ratings">
                                                                        <span class="rating-wrap">
                                                                            <span class="star" Style="width: 100%"></span>
                                                                        </span>
                                                                        <span class="rating-num d-none">( 5 Review )</span>
                                                                    </span>
                                                                    <h5 class="title">{/* <a href="/produit"> */}
                                                                           {data._Title}
                                                                       {/*  </a> */}
                                                                    </h5>
                                                                    <span class="price">
                                                                        <span class="new">{data._Princing._Price} Fcfa</span>
                                                                    </span>
                                                                </div>
                                                                <AddToCartButton
                                                                    product = {data}
                                                                />
                                                            </div>
                                                        </div>
                                                        )
                                                        )};
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </>
        )
    }
}

ProductsList.propTypes = {

}

export default ProductsList