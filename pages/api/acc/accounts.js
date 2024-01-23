import mongoConnect from '../../../utils/mongodb'
import Account from '@/models/Account';
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
        Account.find({
          userid: userId
        }).then(
          (data) => {
            return res.status(200).json({
              status: 200,
              data: data,
              sucess: true,
              message: `accounts`,
            });
          }
        ).catch(
          (error) => {
            return res.status(400).json({
              status: 400,
              sucess: false,
              error: error
            });
          }
        );
      } else {
        // Handle any other HTTP method
      }
    }