// backend/routes/resultadoRoutes.js

const express = require('express');
const router = express.Router();
const resultadoController = require('../controllers/resultadoControllers');

router.post('/', resultadoController.createResultado);
router.get('/', resultadoController.getResultados);
router.get('/:id', resultadoController.getResultadoById);
router.put('/:id', resultadoController.updateResultado);
router.delete('/:id', resultadoController.deleteResultado);

module.exports = router;
