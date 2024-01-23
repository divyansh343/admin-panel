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
    await bcrypt
      .hash(req.body.password, 10).then(
        async (hash) => {
          const user = new User({
            username: req.body.username,
            email: req.body.email,
            role: "user",
            password: hash,
          });

          user.save().then(
            (user) => {
              let token = jwt.sign({
                userId: user._id
              }, process.env.PUBLIC_NEXT_SECRET_KEY, {
                expiresIn: '24h'
              })
              res.status(201).json({
                status: 201,
                token,
                message: 'User Created successfully!',
                sucess: true,
                token: token,
                user: {
                  username: user.username,
                  email: user.email,
                }
              });
            }
          ).catch(
            (error) => {
              res.status(500).json({
                sucess: false,
                statusCode: 500,
                message: error._message,
                error: {
                  error: error.name,
                  message: error._message,
                  description: error.message
                }
              });
            },
          );
        }
      );
  } else {
    // Handle any other HTTP method
  }
}