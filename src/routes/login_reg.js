const express = require('express');

const router = express.Router();

const pool = require('../database');

const {
  isNotLoggedIn,
  isLoggedIn
} = require('../lib/auth');

router.get('/login_reg',  async (req, res) => {
  res.render('./login_reg/main');
});
router.get('/login_reg/:id', async (req, res) => {
    const {
      id
    } = req.params;
  
        res.render('login_reg/forms', {
          id
        });
      });

router.post('/login_reg',  async (req, res) => {
    const {
      username
    } = req.body;
    console.log(username);
    
    try{
        pool.query('SELECT * FROM registros WHERE email = ?', [username]);
        const id = await pool.query('SELECT * FROM registros WHERE email = ?', [username]);
        console.log(id[0].nombre);
        req.flash('SUCCESS', 'Agrega tus datos de hoy '+id[0].nombre);
          res.redirect('/login_reg/'+id[0].id);  
    }
    catch(e){
        console.error(e);
        req.flash('SUCCESS', 'Correo no encontrado');
        res.redirect('/login_reg/');
    }


  
  });

module.exports = router;