import User from '@/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoConnect from '../../../utils/mongodb';
import Account from '@/models/Account';

export const config = {
  api: {
    responseLimit: '12mb',
  },
};

export default async function handler(req, res) {
  try {
    mongoConnect();

    if (req.method === 'POST') {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
      const userId = decodedToken.userId;

      if (!userId) {
        return res.status(401).json({ success: false, message: 'Invalid token!' });
      }

      const newAc = new Account({
        userid: userId,
        account_name: req.body.account_name,
        account_size: req.body.account_size,
        currency: req.body.currency,
        account_type: req.body.account_type,
      });

      await newAc.save();

      return res.status(201).json({
        success: true,
        status: 201,
        data: newAc,
        message: 'Account Created successfully!',
      });
    } else {
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal Server Error',
      error: {
        name: error.name,
        message: error.message,
        description: error.description,
      },
    });
  }
}
