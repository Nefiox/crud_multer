const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controller = require('../controllers/usersController');

// Validaciones
const validateCreateForm = [
    body('first_name')
    .notEmpty().withMessage('Debes completar el campo de nombre'),
    body('last_name')
    .notEmpty().withMessage('Debes completar el campo de apellido'),
    body('email')
    .notEmpty().withMessage('Debes completar el campo de email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    body('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 6 }).withMessage('La contraseña debe tener mínimo 6 caracteres')
];

// Todos los usuarios
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', validateCreateForm, controller.store);

// Detalle de un usuario
router.get('/:id', controller.show);

module.exports = router;