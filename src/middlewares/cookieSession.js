function cookieSession (req, res, next) {
      if (req.cookies.usuario) {
          req.session.userData  = req.cookies.usuario;
          res.locals.userData = req.session.userData
       } 
       next() 
  }
  

module.exports = cookieSession 