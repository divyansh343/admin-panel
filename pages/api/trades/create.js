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

    const newtrd = new Trade({
      userid: userId,
      accid: req.body.accid,
      symbol: req.body.symbol,
      position_type: req.body.position_type,
      margin: req.body.margin,
      leverage: req.body.leverage,
      pnl: req.body.pnl,
      roi: req.body.roi,
      profitable: req.body.profitable,
      image: req.body.image,
      description: req.body.description,
    });
    console.log(typeof (req.body.pnl))
    
    try {
      const savedTrade = await newtrd.save();

      // Use async/await for the update operation
      await Account.updateOne({
        _id: req.body.accid
      }, {
        $inc: {
          account_size: req.body.profitable === 'profit' ? req.body.pnl : -req.body.pnl,
        },
      });

      return res.status(201).json({
        status: 201,
        data: savedTrade,
        message: 'Trade recorded!',
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: error.message,
        error: {
          name: error.name,
          message: error.message,
          description: error.message,
        },
      });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
  }
}