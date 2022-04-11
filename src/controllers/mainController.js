const { validationResult } = require("express-validator")

const controller = {

  index: (req, res )=> {
          res.render('index')
      },
  admin: (req, res )=> {
        
        res.send(`Hola Admin: ${req.query.user}\n`)
    },
  userData: (req, res )=> {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.render("index", {
                userData: req.body
            })
            }else{
               res.render("index", {
                 errors: errors.mapped()
            })
              }
    
    },

 };
   
module.exports = controller ;