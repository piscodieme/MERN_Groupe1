import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductsBanner from '../product/ProductsBanner';
import ProductsCategoryList from './productsCategoryList';
import {useNavigate, useParams } from 'react-router-dom';
import { productService } from '../../service/productService';
import BreadCrumb from '../utilities/BreadCrumb';


function SingleCategoryPage  () {
    let {categoryName} = useParams();
/* const value = useState(()=>{

});
   let data = [];
    console.log(categoryName);
    let dataProducts = async () => {
        await productService.getProductsByCategory(categoryName)
            .then(res => {
                value = res;
                console.log(value);
                return value;
            })
            .catch(error =>{
            console.log("error error error",error);
        })
    }
     
    
        console.log("dataProducts  +++++",value); */
        return (
            <>
                <BreadCrumb
                    title1 = "Nos Categories"
                    title2 = {categoryName}
                />
                <div class="shop-category-area pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <ProductsBanner/>
                                {/*  Shop Top Area Start */}
                                <ProductsCategoryList
                                   /*  dataProducts = {dataProducts} */
                                    categoryName = {categoryName}
                                />
                                {/*  Shop Bottom Area End */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


SingleCategoryPage.propTypes = {

}

export default SingleCategoryPage