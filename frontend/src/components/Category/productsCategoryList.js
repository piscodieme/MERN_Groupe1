import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { productService } from '../../service/productService';

class ProductsCategoryList extends Component {
    constructor(props) {
        super(props)
        this.state={
            productCategory : []
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
    render() {
        const {
            dataProducts,
            categoryName
        }= this.props;
        //console.log("test list product categories ::::::",dataProducts);
        console.log("test list product categories ::::::",this.state.productCategory);
        return (
            <>
                <div class="desktop-tab">
                    <div class="shop-top-bar d-flex">
                                        {/*  Left Side End */}
                                        <div class="shop-tab nav">
                                            <a class="active" href="#shop-grid" data-bs-toggle="tab">
                                                <i class="fa fa-th" aria-hidden="true"></i>
                                            </a>
                                            <a href="#shop-list" data-bs-toggle="tab">
                                                <i class="fa fa-list" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        {/*  Right Side Start */}
                                        <div class="select-shoing-wrap d-flex align-items-center">
                                            <div class="shot-product">
                                                <p>Sort By:</p>
                                            </div>
                                            <div class="shop-select">
                                                <select class="shop-sort">
                                                    <option data-display="Default">Default</option>
                                                    <option value="1"> Name, A to Z</option>
                                                    <option value="2"> Name, Z to A</option>
                                                    <option value="3"> Price, low to high</option>
                                                    <option value="4"> Price, high to low</option>
                                                </select>

                                            </div>
                                        </div>
                                        {/*  Right Side End */}
                                        {/*  Right Side Start */}
                                        <div class="select-shoing-wrap d-flex align-items-center">
                                            <div class="shot-product">
                                                <p>Show:</p>
                                            </div>
                                            <div class="shop-select show">
                                                <select class="shop-sort">
                                                    <option data-display="12">12</option>
                                                    <option value="1"> 12</option>
                                                    <option value="2"> 10</option>
                                                    <option value="3"> 25</option>
                                                    <option value="4"> 20</option>
                                                </select>

                                            </div>
                                        </div>
                                        {/*  Right Side End */}
                                        {/*  Left Side start */}
                                        <p class="compare-product">Product Compare <span>(0) </span></p>
                                    </div>                 
                </div>
                                {/*  Shop Top Area End */}

                                {/*  Mobile shop bar */}
                                <div class="shop-top-bar mobile-tab">
                                    {/*  Left Side End */}
                                    <div class="shop-tab nav d-flex justify-content-between">
                                        <div class="shop-tab nav">
                                            <a class="active" href="#shop-grid" data-bs-toggle="tab">
                                                <i class="fa fa-th" aria-hidden="true"></i>
                                            </a>
                                            <a href="#shop-list" data-bs-toggle="tab">
                                                <i class="fa fa-list" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        {/*  Right Side Start */}
                                        <div class="select-shoing-wrap d-flex align-items-center">
                                            <div class="shot-product">
                                                <p>Sort By:</p>
                                            </div>
                                            <div class="shop-select">
                                                <select class="shop-sort">
                                                    <option data-display="Default">Default</option>
                                                    <option value="1"> Name, A to Z</option>
                                                    <option value="2"> Name, Z to A</option>
                                                    <option value="3"> Price, low to high</option>
                                                    <option value="4"> Price, high to low</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    {/*  Right Side End */}
                                    {/*  Right Side Start */}
                                    <div class="select-shoing-wrap d-flex align-items-center justify-content-between">
                                        <div class="select-shoing-wrap d-flex align-items-center">
                                            <div class="shot-product">
                                                <p>Show:</p>
                                            </div>
                                            <div class="shop-select show">
                                                <select class="shop-sort">
                                                    <option data-display="12">12</option>
                                                    <option value="1"> 12</option>
                                                    <option value="2"> 10</option>
                                                    <option value="3"> 25</option>
                                                    <option value="4"> 20</option>
                                                </select>

                                            </div>
                                        </div>
                                        {/*  Right Side End */}
                                        {/*  Left Side start */}
                                        <p class="compare-product">Product Compare <span>(0) </span></p>
                                    </div>
                                </div>
                                {/*  Mobile shop bar */}

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
                                                                
                                                                <div class="thumb">
                                                                    <a href={"/produit/"+item._id} class="image">
                                                                        <img src={item._Images._Frame}
                                                                            alt="Product" />
                                                                        <img class="hover-image"
                                                                            src={item._Images._Others[0]} alt="Product" />
                                                                    </a>
                                                                    <span class="badges">
                                                                        <span class="sale">-10%</span>
                                                                        <span class="new">New</span>
                                                                    </span>
                                                                    <div class="actions">
                                                                        <a href="wishlist.html" class="action wishlist"
                                                                            title="Wishlist"><i class="pe-7s-like"></i></a>
                                                                        <a href="/" class="action quickview"
                                                                            data-link-action="quickview" title="Quick view"
                                                                            data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                                                class="pe-7s-look"></i></a>
                                                                        <a href="compare.html" class="action compare"
                                                                            title="Compare"><i class="pe-7s-refresh-2"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <span class="ratings">
                                                                        <span class="rating-wrap">
                                                                            <span class="star" Style="width: 100%"></span>
                                                                        </span>
                                                                        <span class="rating-num d-none">( 5 Review )</span>
                                                                    </span>
                                                                    <h5 class="title"><a href="single-product.html">
                                                                            {item._Title}
                                                                        </a>
                                                                    </h5>
                                                                    <span class="price">
                                                                        <span class="new">{item._Princing._Promo} Fcfa</span>
                                                                        <span class="old">{item._Princing._Price} Fcfa</span>
                                                                    </span>
                                                                </div>
                                                                <button title="Add To Cart" class=" add-to-cart">Add
                                                                    To Cart</button>
                                                            </div>
                                                            {/*  Single Prodect */}
                                                        </div>
                                                        )}
                                                       
                                                    </div>
                                                </div>
                                                {/*  les tab */}
                                                <div class="tab-pane fade" id="shop-list">
                                                    <div class="shop-list-wrapper">
                                                        <div class="row">
                                                            <div class="col-md-5 col-lg-5 col-xl-4">
                                                                <div class="product">
                                                                    <div class="thumb">
                                                                        <a href="single-product.html" class="image">
                                                                            <img src="assets/images/product-image/1.jpg"
                                                                                alt="Product" />
                                                                            <img class="hover-image"
                                                                                src="assets/images/product-image/1.jpg"
                                                                                alt="Product" />
                                                                        </a>
                                                                        <span class="badges">
                                                                            <span class="new">New</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-7 col-lg-7 col-xl-8">
                                                                <div class="content-desc-wrap">
                                                                    <div class="content">
                                                                        <span class="ratings">
                                                                            <span class="rating-wrap">
                                                                                <span class="star" Style="width: 100%"></span>
                                                                            </span>
                                                                            <span class="rating-num d-none">( 5 Review )</span>
                                                                        </span>
                                                                        <h5 class="title"><a href="single-product.html">Hand-Made Garlic
                                                                            Mortar
                                                                        </a></h5>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                                            exercitation ullamco laboris </p>
                                                                    </div>
                                                                    <div class="box-inner">
                                                                        <span class="price">
                                                                            <span class="new">$38.50</span>
                                                                        </span>
                                                                        <div class="actions">
                                                                            <a href="wishlist.html" class="action wishlist"
                                                                                title="Wishlist"><i class="pe-7s-like"></i></a>
                                                                            <a href="/" class="action quickview"
                                                                                data-link-action="quickview" title="Quick view"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#exampleModal"><i
                                                                                    class="pe-7s-search"></i></a>
                                                                            <a href="compare.html" class="action compare"
                                                                                title="Compare"><i class="pe-7s-refresh-2"></i></a>
                                                                        </div>
                                                                        <button title="Add To Cart" class=" add-to-cart">Add
                                                                            To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                {/* les tab end */}
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Tab Content Area End */}

                                    {/*   Pagination Area Start */}
                                    <div class="pro-pagination-style text-center text-lg-end" data-aos="fade-up" data-aos-delay="200">
                                        <div class="pages">
                                            <ul>
                                                <li class="li"><a class="page-link" href="/"><i class="fa fa-angle-left"></i></a>
                                                </li>
                                                <li class="li"><a class="page-link" href="/">1</a></li>
                                                <li class="li"><a class="page-link active" href="/">2</a></li>
                                                <li class="li"><a class="page-link" href="/">3</a></li>
                                                <li class="li"><a class="page-link" href="/"><i class="fa fa-angle-right"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*   Pagination Area End */}
                                </div>
                                {/*  Shop Bottom Area End */}
            </>
        )
    }
}

ProductsCategoryList.propTypes = {

}

export default ProductsCategoryList