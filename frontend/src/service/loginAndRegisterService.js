import Api from "./Api";


export const loginAndRegisterService = {
    login,
    register,
    disconnect,
}

function disconnect(){
    sessionStorage.clear();
}

function login(username, password){
   
    console.log("test data SERVICE  >>>>>>>",username)
    const dataLogin = {
        "_Login": username,
        "_Password": password
    }
    return new Promise((resolve,reject)=>{
        Api.post('/customerConnexion/',dataLogin)
        .then(res => {
            const userInfo = {
                "firstname" : res.data.firstname,
                "lastname" : res.data.lastname,
                "adresse" : res.data.adresse,
                "numero" : res.data.numero
            }
            sessionStorage.setItem("token", JSON.stringify(res.data.token));
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

            console.log("res data ---------> ",res.data);
            console.log(sessionStorage.getItem("token"))
            
            resolve(res.data);
        })
        .catch((error) =>{
            console.log("errrorrr loginnnn")
            reject(error);
        })
     })  
}

function register(firstname,lastname,login,adresse,telephone,password) {
    const dataRegister = {
        "_FirstName": firstname,
        "_LastName": lastname,
        "_Adresse": adresse,
        "_Login":login,
        "_NumeroTel":telephone,
        "_Password":password
    }
   // const data = dataRegister.json();

    console.log("register service");
    return new Promise((resolve,reject)=>
        Api.post('/customerInscription/',dataRegister)
            .then(res => {
                console.log("succes register");
                console.log(res.data.message)
                resolve(res.data.message)
            })
            .catch(error =>{
                console.log("error register");
                console.log("error register"+error)
                reject(error)
            })
        )

}