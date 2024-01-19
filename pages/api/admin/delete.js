import User from '@/models/User';
import mongoConnect from '../../../utils/mongodb'

export const config = {
  api: {
    responseLimit: '12mb',
  },
}

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'DELETE') {
    User.deleteOne({_id: req.body.userid}).then(
      () => {
        res.status(200).json({
          status: 200,
          sucess: true,
          message: `user deleted sucessfully`,
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