const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get('/', controller.getAllBooks);
router.get('/livros', controller.getAllBooks);
router.get("/:id", controller.getById);
router.post("/", controller.postBooks);

module.exports = router;