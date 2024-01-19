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
            username: "user",
            email: req.body.email,
            password: hash,
          });

          user.save().then(
            (user) => {
              return res.status(201).json({
                status: 201,
                message: 'User Created successfully!',
                sucess: true,
                user: {
                  email: req.body.email,
                  password: req.body.password
                }
              });
            }
          ).catch(
            (error) => {
              return res.status(500).json({
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