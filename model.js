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

