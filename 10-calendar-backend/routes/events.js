const { Router } = require('express');
const router = Router();
//const {check} = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
//const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt');

router.get('/', validarJWT, getEventos);
router.post('/', validarJWT, crearEvento);
router.put('/:id', validarJWT, actualizarEvento);
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;