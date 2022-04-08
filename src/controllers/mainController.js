/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');// RESUMEN DE LA RUTA
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//lee json y lo pasa a javascrip base de datos parceada

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 */
const controller = {

  index: (req, res )=> {
   
          res.render('index')//render nos permite ver la pagina
      },
  admin: (req, res )=> {
        
        res.send(`Hola Admin: ${req.query.user}\n`)
    },
 };

module.exports = controller ;