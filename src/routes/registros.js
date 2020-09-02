const express = require('express');

const router = express.Router();

const pool = require('../database');

const {
  isLoggedIn
} = require('../lib/auth');

const {
  createPoolCluster
} = require('mysql');

router.get('/', isLoggedIn, async (req, res) => {
  const registros = await pool.query('SELECT * FROM registros WHERE user_id = ?', [req.user.id]);
  res.render('registros/list', {
    registros
  });
});

router.get('/add', isLoggedIn, (req, res) => {
  res.render('registros/add');
});

router.post('/add', async (req, res) => {
  const {
    nombre,
    apellidoP,
    apellidoM,
    email,
    proyecto,
  } = req.body;
  const newRegistro = {
    nombre,
    apellidoP,
    apellidoM,
    email,
    proyecto,
    user_id: req.user.id
  };
  await pool.query('INSERT INTO registros set ?', [newRegistro]);
  //await pool.query('INSERT INTO temperaturas set ?', [temperatura]);
  req.flash('SUCCESS', 'Registro agregado satisfactoriamente');
  res.redirect('/registros');
});

router.get('/temperatura/:id', isLoggedIn, async (req, res) => {
  const {
    id
  } = req.params;
      const temperaturas = await pool.query('SELECT * FROM temperaturas WHERE reg_id = ?', [id]);
      const registros = await pool.query('SELECT * FROM registros WHERE user_id = ?', [id]);

      res.render('registros/temperatura', {
        temperaturas: temperaturas,
        registro: registros[0],
        id
      });
    });
router.get('/noTemp/:id', isLoggedIn, async (req, res) => {
  const {
    id
  } = req.params;
  console.log(id);
      
      const registros = await pool.query('SELECT * FROM registros WHERE user_id = ?', [id]);
      res.render('registros/noTemp', {
        registro: registros[0],
        ident: id
      });
    });
router.post('/temperatura/:id', isLoggedIn, async (req, res) => {
        const {
          id
        } = req.params;
        console.log(id);
        const {
         temperatura
        } = req.body;
        const newLink = {
          temperatura,
          reg_id : id
        };
        console.log(newLink);
        await pool.query('INSERT INTO temperaturas set ?', [newLink]);
        
        req.flash('SUCCESS', 'Temperatura de hoy salvada!!');
        res.redirect('/registros');
      });


router.get('/delete/:id', isLoggedIn, async (req, res) => {
  const {
    id
  } = req.params;
  await pool.query('DELETE FROM temperaturas WHERE reg_id = ?', [id]);
  await pool.query('DELETE FROM registros WHERE id = ?', [id]);
  req.flash('SUCCESS', 'Registro eliminado');
  res.redirect('/registros');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
  const {
    id
  } = req.params;
  const registros = await pool.query('SELECT * FROM registros WHERE id = ?', [id]);

  res.render('registros/edit', {
    registro: registros[0]
  });
});
router.post('/edit/:id', isLoggedIn, async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre,
    apellidoP,
    apellidoM,
    email,
    proyecto,
  } = req.body;
  const newLink = {
    nombre,
    apellidoP,
    apellidoM,
    email,
    proyecto,
    user_id: req.user.id
  };
  console.log(newLink);
  await pool.query('UPDATE registros set ? WHERE id = ?', [newLink, id]);
  req.flash('SUCCESS', 'LINK UPDATED!!');
  res.redirect('/registros');
});

module.exports = router;