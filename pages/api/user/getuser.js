import User from '@/models/User';
import mongoConnect from '../../../utils/mongodb'
const jwt = require('jsonwebtoken');

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'GET') {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.PUBLIC_NEXT_SECRET_KEY);
    const userId = decodedToken.userId;
    if (!userId) {
      return res.json('Invalid token!');
    }
    User.findOne({_id : userId}).then(
      (data) => {
        res.status(200).json({
          status: 200,
          data: {
            username : data.username,
            email : data.email,
            id : data._id,
          },
          sucess: true,
          message: `welcome admin`,
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
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