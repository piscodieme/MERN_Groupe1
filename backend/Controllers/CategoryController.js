const Category = require("../Models/CategoryModel") ;


exports.getAllCategory = (req, res, next) => {
    Category.find({}, (error, categories) => {
        if(error)
            next(error);
        req.data = categories ;
        next();    
    }) ;
} ;



exports.postCategory = (req, res) => {

    let category = new Category ;
    category._Name = req.body.name ;
    category._SubCategory = req.body.subcategory ;
    category._Image = req.file.destination + req.file.filename ;
    category.save((err) =>{
        if(err){
            return res.send(err);
        }
        return res.send({message: 'category created'});
    });
} ;

exports.updateCategory = (req, res) => {
    Category.findOne({_id: req.params.id}, (error, category) => {
        if(error){
            res.send(error);
        }
        let cat = req.body ;
        category._Name = cat._Name ;
        category._SubCategory = cat._SubCategory ;
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
    Category.deleteOne({_id: req.params.id}, (error) => {
        if(error){
            res.send(error);
        }
        res.redirect(200, '/allCategory') ;
    }) ;
} ;