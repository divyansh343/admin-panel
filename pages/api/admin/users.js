import User from '@/models/User';
import mongoConnect from '../../../utils/mongodb'

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'GET') {
    User.find({usertype : "user"}).then(
      (data) => {
        return res.status(200).json({
          status: 200,
          data : data,
          sucess: true,
          message: `users`,
        });
      }
    ).catch(
      (error) => {
        return res.status(400).json({
          status: 400,
          sucess: false,
          error: error
        });
        // console.log(error);
      }
    );
  } else {
    // Handle any other HTTP method
  }
}