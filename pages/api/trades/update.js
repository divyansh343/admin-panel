import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoConnect from '../../../utils/mongodb';
import Trade from '@/models/Trade';
import Account from '@/models/Account';

export const config = {
  api: {
    responseLimit: '12mb',
  },
};

export default async function handler(req, res) {
  mongoConnect();

  if (req.method === 'POST') {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
    const userId = decodedToken.userId;

    if (!userId) {
      return res.json('Invalid token!');
    }

    const data = {
      symbol: req.body.symbol,
      position_type: req.body.position_type,
      margin: req.body.margin,
      leverage: req.body.leverage,
      pnl: req.body.pnl,
      roi: req.body.roi,
      profitable: req.body.profitable,
      image: req.body.image,
      description: req.body.description,
    }
    Trade.updateOne({
      "_id": req.body.tradid
    }, data).then(
      (data) => {
        return res.status(201).json({
          status: 201,
          data: data,
          sucess: true,
          message: `update trade record`,
        });
      }
    ).catch(
      (error) => {
        return res.status(401).json({
          status: 401,
          sucess: false,
          error: error
        });
      }
    );
  } else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
  }
}