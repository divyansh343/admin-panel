import mongoConnect from '../../../utils/mongodb'
import Trade from '@/models/Trade';
import jwt from 'jsonwebtoken';

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

    Trade.find({accid : req.body.accid}).sort({ createdAt: -1 }).then(
      (data) => {
        console.log(data)
        return res.status(200).json({
          status: 200,
          data : data,
          sucess: true,
          message: `all trades`,
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