import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AllProductPage from '../../components/product/AllProductPage';
import BreadCrumb from '../../components/utilities/BreadCrumb';
import {productService} from '../../service/productService';
//let data=[];

/* async function getdata() {
    const url = 'http://localhost:1337/products';
    const response =  await fetch(url);
    const data = await response.json();
    //console.log(data)
    return data;
  }; */

class AllProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            donnees:[],
            errorMessage:'',    
          }
        }
   async componentDidMount(){
        
        await productService.getAllProducts()
            .then(res=>{
                const dataProduct = res;
                console.log(dataProduct);
                this.setState({donnees:dataProduct})
            })
            .catch(error =>{
                this.setState({errorMessage:"Get All Products Error",error})
            });
        

           /*  const testFetch = await getdata();
            console.log("data Fetch ========",testFetch) */
        }
        
        
        
        
        render() {
            const {
                data
            }= this.props;
     
        return (
            <>
            {/* {this.state.donnees.map((dataa,index)=>(
                <div>
                    <h1>{index}</h1>
                    <h1>{dataa._Title}</h1>
                </div>
                )
            )}; */}
                <BreadCrumb
                    title1 = "Nos Produits"
                    title2 ="Liste des Produits"
                />
                <AllProductPage
                    dataProduct = {this.state.donnees}

                />
            </>
        )
    }
}

AllProduct.propTypes = {

}

export default AllProduct