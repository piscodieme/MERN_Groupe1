const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'Invalid user ID';
//     } else {
//       next();
//     }
//   } catch {
//     res.redirect('/displayLogin') ;
//   }
// };

module.exports = (req, res, next) => {
    if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      res.redirect('/displayLogin') ;
   }
};