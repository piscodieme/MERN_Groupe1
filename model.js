//Creer Database
//use shop ;

//Creer Collection tb_Products

db.createCollection("tb_Products") ;

//Inserer un exemple de produits

db.tb_Products.insertOne(
    {
        _Title: "Chaussure 1",
        _Category: ["sandale", "botte"],
        _Princing: {
            _Price: 5000, _Promo: 4500},
        _Descriptions: {_Short: "tres jolie", _Long: "tres tres jolie chaussure"},
        _Quantity: 10,
        _Images: {_Frame: "dnvknskvsn", _Others: ["dvsvsfv", "sdfvsfvsvv"]},
        _Comments: {_LoginUser: "test", _Comment: "un commentaire"},
        _Mark: 5
    }
 );


//FormatJSON
// {
//         "_Title": "Chaussure 1",
//         "_Category": ["sandale", "botte"],
//         "_Princing": {
//             "_Price": 5000, "_Promo": 4500},
//         "_Descriptions": {"_Short": "tres jolie", "_Long": "tres tres jolie chaussure"},
//         "_Quantity": 10,
//         "_Images": {"_Frame": "dnvknskvsn", "_Others": ["dvsvsfv", "sdfvsfvsvv"]},
//         "_Comments": {"_LoginUser": "test", "_Comment": "un commentaire"},
//         "_Mark": 5
//     } 

// {
//     "_Name": "Sandale",
//     "_Image": "djvnsjvnssjn";
// }

// {
//     "_id": "marfadiga@gmail.com",
//     "_FirstName": "Mame Mar",
//     "_LastName": "Niang",
//     "_Password": "Aissatou", 
//     "_Adresse": {
//         "_Pays": "Senegal",
//         "_Region": "Dakar",
//         "_Ville": "Rufisque",
//         "_Quartier": "Keury Souf"
//     },
//     "_NumeroTel": "772234566"
// }