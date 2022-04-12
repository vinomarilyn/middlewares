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
            req.session.user = req.body.name;
            req.session.color = req.body.color;
            
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


 };
   
module.exports = controller ;