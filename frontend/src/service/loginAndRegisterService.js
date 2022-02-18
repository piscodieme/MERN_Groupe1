import Api from "./Api";
/* import { useNavigate } from "react-router-dom"; */


export const loginAndRegisterService = {
    login,
    register,
    disconnect,
}

function disconnect(){
    sessionStorage.clear();
}

async function login(username, password){
    console.log("test data SERVICE  >>>>>>>",username)
    const dataLogin = {
        "_Login": username,
        "_Password": password
    }
    try{
        const res = await Api.post('/customerConnexion/',dataLogin);
        //console.log(res);
        const userInfo = {
            "firstname" : res.data.firstname,
            "lastname" : res.data.lastname,
            "adresse" : res.data.adresse,
            "numero" : res.data.numero,
        }
        sessionStorage.setItem("token", JSON.stringify(res.data.token));
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        sessionStorage.setItem("userId",JSON.stringify(res.data.userId))

        console.log("res data ---------> ",res.data);
        console.log(sessionStorage.getItem("token"));
        return res.data;

    }
    catch(e){
        console.log(e);
    }

   
}

async function register(firstname,lastname,login,adresse,telephone,password) {

    const dataRegister = {
        "_FirstName": firstname,
        "_LastName": lastname,
        "_Adresse": adresse,
        "_Login":login,
        "_NumeroTel":telephone,
        "_Password":password
    }
   try{
       const res = await Api.post('/customerInscription/',dataRegister);
       console.log(res.data.message);
       return res.data.message;

   }
   catch(e){
       console.log(e);
   }

   /*  console.log("register service");
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
        ) */

}