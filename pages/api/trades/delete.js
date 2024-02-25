const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'
import Trade from '@/models/Trade';
import Account from '@/models/Account';

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

// ... (imports and config)

export default async function handler(req, res) {
  try {
    await mongoConnect();

    if (req.method === 'DELETE') {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
      const userId = decodedToken.userId;

      if (!userId) {
        return res.status(401).json({
          status: 401,
          success: false,
          message: 'Invalid token!',
        });
      }

      // Update account size
      await Account.updateOne({
        _id: req.body.accid
      }, {
        $inc: {
          account_size: req.body.profitable === 'loss' ? req.body.pnl : -req.body.pnl,
        },
      });

      await Trade.deleteOne({
        _id: req.body.tradid
      });

      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Trade record deleted',
      });
    } else {
      // Handle any other HTTP method
    }



    return res.status(200).json({
      status: 200,
      success: true,
      message: 'Account size updated',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      error: 'Internal Server Error',
    });
  }
}