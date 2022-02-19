import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { productService } from '../../service/productService';
import AddToCartButton from  '../../components/utilities/AddToCartButon';

class ProductsCategoryList extends Component {
    constructor(props) {
        super(props)
        this.state={
            productCategory : [],
        }
        
    }
    async componentDidMount(){
        console.log("propssss === ",this.props.categoryName);
        await productService.getProductsByCategory(this.props.categoryName)
        .then(res => {
            const value = res;
            this.setState({productCategory : value})
            console.log(value);
            return value;
        })
        .catch(error =>{
        console.log("error error error",error);
    }) 
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
        const {
            dataProducts,
            categoryName
        }= this.props;
        //console.log("test list product categories ::::::",dataProducts);
        console.log("test list product categories ::::::",this.state.productCategory);
        return (
            <>
                {/*  Shop Bottom Area Start */}
                <div class="shop-bottom-area">

                    {/*  Tab Content Area Start */}
                    <div class="row">
                        <div class="col">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="shop-grid">
                                    <div class="row mb-n-30px">
                                        {this.state.productCategory.map((item, index)=>
                                        
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up"
                                            data-aos-delay="400">
                                            {/*  Single Prodect */}
                                            <div class="product">
                                                
                                                <div class="thumb redimension">
                                                    <a href={"/produit/"+item._id} class="image">
                                                        {this.addImage(item._Images._Frame)}
                                                        {/* <img class="hover-image"
                                                            src={item._Images._Others[0]} alt="Product" /> */}
                                                    </a>
                                                    
                                                </div>
                                                <div class="content">
                                                    
                                                    <h5 class="title"><a href="single-product.html">
                                                            {item._Title}
                                                        </a>
                                                    </h5>
                                                    <span class="price">
                                                        <span class="new">{item._Princing._Promo} Fcfa</span>
                                                        <span class="old">{item._Princing._Price} Fcfa</span>
                                                    </span>
                                                </div>
                                                <AddToCartButton
                                                    product = {item}
                                                
                                                />
                                            </div>
                                            {/*  Single Prodect */}
                                        </div>
                                        )}
                                        
                                    </div>
                                </div>
                               
                                {/* les tab end */}
                            </div>
                        </div>
                    </div>
                    {/*  Tab Content Area End */}

                </div>
            </>
        )
    }
}

ProductsCategoryList.propTypes = {

}

export default ProductsCategoryList