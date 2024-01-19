import User from '@/models/User';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'POST') {
    User.findOne({
      email: req.body.email
    }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: 'User not exist with this credentials!'
            // error: new Error('User not exist with this credentials!')
          });
        }
        if (user.usertype === "admin") {
          return res.status(401).json({
            error: 'login from admin login page!'
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: 'Incorrect password!'
              });
            }
            const token = jwt.sign({
              userId: user._id
            }, process.env.PUBLIC_NEXT_SECRET_KEY, {
              expiresIn: '24h'
            })
            res.status(200).json({
              token: token,
              status: 200,
              sucess: true,
              user: {
                name: user.name,
                email: user.email,
              }
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    )
  } else {
    // Handle any other HTTP method
  }
}