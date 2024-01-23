const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'
import mongoConnect from '../../../utils/mongodb'
import Trade from '@/models/Trade';

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'DELETE') {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
    const userId = decodedToken.userId;
    if (!userId) {
      return res.json('Invalid token!');
    }
    Trade.deleteOne({
      _id: req.body.tradid
    }).then(
      () => {
        return res.status(200).json({
          status: 200,
          sucess: true,
          message: `Trade record deleted`,
        });
      }
    ).catch(
      (error) => {
        return res.status(400).json({
          status: 400,
          sucess: false,
          error: error
        });
        console.log(error);
      }
    );
  } else {
    // Handle any other HTTP method
  }
}