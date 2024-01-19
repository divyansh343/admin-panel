import User from '@/models/User';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'
import cloudinary from '../../../utils/cloudinary'
import Request from '@/models/Request';

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'POST') {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
    const userId = decodedToken.userId;
    if (!userId) {
      return res.status(401).json('Invalid token!');
    }
    const result = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "users",
    })
    const requestkey = new Request({
      userid: userId,
      username: req.body.username,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
    });

    requestkey.save().then(
      (user) => {
        return res.status(201).json({
          status: 201,
          message: 'request to change raised!',
          sucess: true,
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
  } else {
    // Handle any other HTTP method
  }
}