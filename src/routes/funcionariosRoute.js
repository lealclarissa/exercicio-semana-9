const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionariosController');

router.get('/',controller.getAll);
router.get('/funcionarios', controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postFuncionarios);

module.exports = router;