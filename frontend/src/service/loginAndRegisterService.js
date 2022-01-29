import Api from "./Api";


export const loginAndRegisterService = {
    login,
    register
}
function login(username, password){
   
    console.log("test data SERVICE  >>>>>>>",username)
    const dataLogin = {
        'login': username,
        'password': password
    }
    return new Promise((resolve,reject)=>{
        Api.get('/customerConnexion/'+dataLogin)
        .then(res => {
            sessionStorage.setItem("token", JSON.stringify(res.data.token));
            console.log("res data ---------> ",res.data);
            console.log(sessionStorage.getItem("token"))
            
            resolve(res.data);
        })
        .catch((error) =>{
            reject(error);
        })
     })  
}

function register(data) {

}