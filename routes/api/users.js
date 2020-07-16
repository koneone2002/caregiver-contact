const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

// @ route   GET api/users
// @desc     Test route
// @ access  Public
// router.get('/', (req, res) => res.send('User Route'));

// @ route   POST api/users
// @desc     register user
// @ access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send('passed');

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      //res.send('User saved');

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

    // console.log(req.body);
    // res.send('User Route');
  }
);
// @ route   POST api/users
// @desc     register user
// @ access  Public
// router.post(
//   '/forgotPassword',
//   [check('email', 'Please include a valid email').isEmail()],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // res.send('passed');

//     const { name, email, password, passwordReset } = req.body;
//     const userFields = {};
//     userFields.user = password;
//     if (password) userFields.password = password;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ errors: [{ msg: 'No user found' }] });
//       } else {
//         if (user) {
//           user = await User.findOneAndUpdate(
//             { user: password },
//             { $set: userFields },
//             { new: true }
//           );
//           return res.json(user);
//         }
//         user = new User(userFields);
//         await user.save();
//         res.json(user);
//       }

//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);

//       await user.save();
//       //res.send('User saved');

//       const payload = {
//         user: {
//           id: user.id
//         }
//       };
//       jwt.sign(
//         payload,
//         config.get('jwtSecret'),
//         {
//           expiresIn: 360000
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }

//     // console.log(req.body);
//     // res.send('User Route');
//   }
// );

module.exports = router;
