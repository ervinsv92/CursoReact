const { Router } = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const router = Router();
router.use(validarJWT);
const {check} = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

router.get('/', 
        [
            check('title', 'El título es obligatorio').not().isEmpty(),
            check('start', 'Fecha de inicio es obligatoria').custom(isDate),
            check('end', 'Fecha de fin es obligatoria').custom(isDate),
            validarCampos
        ],
        getEventos);
router.post('/', crearEvento);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

module.exports = router;