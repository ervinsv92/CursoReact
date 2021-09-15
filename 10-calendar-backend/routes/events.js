const { Router } = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const router = Router();
router.use(validarJWT);
//const {check} = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
//const { validarCampos } = require('../middlewares/validar-campos');

router.get('/', getEventos);
router.post('/', crearEvento);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

module.exports = router;