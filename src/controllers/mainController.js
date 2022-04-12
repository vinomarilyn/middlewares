const { validationResult } = require("express-validator")

const controller = {

  index: (req, res )=> {
          res.render('index', {
            session: req.session
         })
      },
  admin: (req, res )=> {
        
        res.send(`Hola Admin: ${req.query.user}\n`)
    },
  userData: (req, res )=> {
        let errors = validationResult(req);

        if(errors.isEmpty()){
           req.session.userData = req.body;
           const userData = req.session.userData ;

           if (req.body.keepsession){
            const TIME_IN_MILISECONDS = 60000000
            res.cookie("usuario", req.session.userData , {
                expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                httpOnly: true,
                secure: true
            })
          }
          res.locals.userData = req.session.userData;

         res.render("index", {
              userData: req.body,
              session: req.session
           }) 

             }else{
               res.render("index", {
                 errors: errors.mapped(),
                 session: req.session
            })
              }    
    },
  page: (req, res )=> {
      
      res.render("page", {
         session: req.session
      })
   },

   logout: (req, res )=> {
         req.session.destroy();
      if(req.cookies.usuario){
        res.cookie("usuario", "", { maxAge: -1 })
      }
     return res.redirect('/')
 },

 };
   
module.exports = controller ;