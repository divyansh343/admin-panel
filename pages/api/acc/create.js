import User from '@/models/User';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'
import Account from '@/models/Account';

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
      return res.json('Invalid token!');
    }

    const newAc = new Account({
      userid: userId,
      account_name: req.body.account_name,
      account_size: req.body.account_size,
      currency: req.body.currency,
      account_type: req.body.account_type,
    });
console.log(typeof(req.body.account_type))
    newAc.save().then(
      (newAc) => {
        return res.status(201).json({
          status: 201,
          data: newAc,
          message: 'Account Created successfully!',
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