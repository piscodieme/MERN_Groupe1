import Api from "./Api";

export const categoryService = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
}

/* create Category Service */

function createCategory(data){
    Api.post('/category/'+data)
        .then(res => res.data)
        .catch((error)=>console.log("++++++Error Create Category Service :"+error));
}

/* Update Category Service */
function updateCategory(data){
    Api.put('/category/'+data)
        .then(res => res.data)
        .catch((error)=>console.log("++++++++Error Update category Service+++++++++"+error));
}

/* Delete Category Service */
function deleteCategory(id){
    Api.delete('/category/'+id)
        .then(res => res.data)
        .catch(error => console.log("++++++++Error Delete category Service+++++++++"+error))
}

/* Get All Categories Service */
async function getAllCategories (){
    console.log("test category**********");
    return await Api.get('/category')
        .then(res => res.data)
        .catch(error => (" ++++++Error Get All Categories Service+++++++ "+error))
}