import User from '@/models/User';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'
import cloudinary from '../../../utils/cloudinary'

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
          // const result = await cloudinary.uploader.upload(req.body.avatar, {
          //   folder: "users",
          // })
          const user = new User({
            username: req.body.username,
            email: req.body.email,
            usertype: "admin",
            password: hash,
          });

          user.save().then(
            (user) => {
              let token = jwt.sign({
                userId: user._id
              }, process.env.PUBLIC_NEXT_SECRET_KEY, {
                expiresIn: '24h'
              })

              return res.status(201).json({
                status: 201,
                message: 'User Created successfully!',
                sucess: true,
                token: token,
                user: {
                  username: user.username,
                  email: user.email,
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