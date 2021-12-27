const Category = require("../Models/CategoryModel") ;


exports.getAllCategory = (req, res, next) => {
    Category.find({}, (error, categories) => {
        if(error)
            next(error);
        req.data = categories ;
        next();    
    }) ;
} ;



exports.postCategory = (req, res, next) => {
    let category = new Category ;
    let cat = req.body ;
    category._Name = cat._Name ;
    category._Image = cat._Image ;
    category.save((err) =>{
        if(err){
            res.send(err);
        }
        res.send({message: 'category created'});
    });
    next();
} ;

exports.updateCategory = (req, res) => {
    Category.findOne({_id: req.params.id}, (error, category) => {
        if(error){
            res.send(error);
        }
        let cat = req.body ;
        category._Name = cat._Name ;
        category._Image = cat._Image ;
        category.save((err) =>{
            if(err){
                res.send(err);
            }
            res.send({message: 'category updated'});
        });
    }) ;
} ;

exports.deleteCategory = (req, res, next) => {
    Category.remove({_id: req.params.id}, (error) => {
        if(error){
            res.send(error);
        }
        res.send({message: 'category deleted'});
    }) ;
    next();
} ;