import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../components/header/header'
import {categoryService} from '../../service/categoryService'


class Header extends Component {
    constructor(props) {

        super(props)
        this.state = {  
            dataCategories:[],
            errorMessage:'',    
          }

    }

    async componentDidMount() {
       await categoryService.getAllCategories()
        .then(res=>{
            const dataCategories = res;
            console.log(dataCategories);
            this.setState({dataCategories:dataCategories});
        })
        .catch(error =>{
            this.setState({errorMessage:"Get All Categories Error",error})
        });
    }

   
    render() {
        console.log(this.state.dataCategories);
        return (
            <>
                <HeaderComponent
                    dataCategories={this.state.dataCategories}
                />
            </>
        )
    }
}

Header.propTypes = {

}

export default Header