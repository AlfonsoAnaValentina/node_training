const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidation } = require('../middlewares/field-validation');

const {
  usersGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
} = require('../controllers/user');

const router = Router();

router.get('/', usersGet);


router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password is required and should be 6 characters long').isLength({ min:6 }),
  check('mail', 'Mail is not valid').isEmail(),
  check('role', 'Role is not valid role').isIn(['ADMIN_ROLE', 'USER_ROLE' ]),
  fieldValidation,
], userPost);

router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);

module.exports = router