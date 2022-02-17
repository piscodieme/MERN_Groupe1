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
    category._Image = req.file.destination + req.file.filename ;
    category.save((err) =>{
        if(err){
            return res.send(err);
        }
        res.redirect('/allCategory') ;
    });
} ;

exports.updateCategory = (req, res) => {
    Category.findOne({_id: req.params.id}, (error, category) => {
        if(error){
            res.send(error);
        }
        let cat = req.body ;
        category._Name = cat.name ;
        if(req.file){
            category._Image = req.file.destination + req.file.filename ;
        }
        else{
            category._Image = cat.framebis ;
        }
        category.save((err) =>{
            if(err){
                res.send(err);
            }
            res.redirect('/allCategory') ;
        });
    }) ;
} ;

exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({_id: req.params.id}, (error) => {
        if(error){
            res.send(error);
        }
        res.redirect('/allCategory') ;
    }) ;
} ;