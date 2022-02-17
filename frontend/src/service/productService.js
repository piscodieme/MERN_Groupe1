import Api from "./Api";
import { fromJS, List, Map } from 'immutable';


/* const api = axios.create({
    baseURL : 'http://localhost/1337'
}) */

export const productService = {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    getProductsByCategory,
  };
/* get All products service */
 function getAllProducts(){
     return new Promise((resolve,reject)=>{
        Api.get('/products')
        .then(res => {
            resolve(res.data);
        })
        .catch((error) =>{
            reject(error);
        })
     })
   
}
/* get one product service */
async function getOneProduct(id){
    console.log("test getOneProducts",id);
    return await Api.get('/products/'+id)
        .then(res =>res.data)
        //.then(res.json()) 
        .catch(() => console.log("++++++++++error service getOneProducts+++++++++++"));  
}

/* Delete one product Service */
function deleteProduct(id){
    return Api.delete('/products/'+id)
        .then(response => response.data)
        .catch(()=>console.log("+++++++++++Error delete product service++++++++++++++"))
}

/* Update One product Sercice */
function updateProduct(data){
    return Api.put('/products/'+data)
        .then(res => res.data)
        .catch(()=>console.log("+++++++++Error Update product Service++++++++++++"))
}

/* Create product Service  */
function createProduct (data){
    return Api.post('/products/'+data)
        .then(response => response.data)
        .catch(()=>console.log("+++++++++Error Create product Service++++++++++++"))
}

/* get Products By Category service */
function getProductsByCategory (category){
    return new Promise((resolve,reject)=>{
    Api.get('/productsCategory/'+category)
    .then(res => {
        resolve(res.data);
    })
    .catch((error) =>{
        reject(error);
    })
})
}