import User from '@/models/User';
import mongoConnect from '../../../utils/mongodb'

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'POST') {
    const data = {
      username: req.body.username,
      image: {
        public_id: req.body.image.public_id,
        url: req.body.image.url,
      }
    }
    User.updateOne({
      _id: req.body.userid
    }, data).then(
      (data) => {
        res.status(200).json({
          status: 200,
          sucess: true,
          message: `Request Approved`,
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