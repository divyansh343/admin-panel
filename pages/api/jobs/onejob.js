import mongoConnect from '../../../utils/mongodb'
import Job from '@/models/Job';
export const config = {
  api: {
    externalResolver: true,
  },
}
export default function handler(req, res) {
  mongoConnect()
  if (req.method === 'GET') {
    Job.findOne({
      _id: req.query.job
    }).then(
      (response) => {
        return res.status(200).json({
            status: 200,
            sucess: true,
            response: response,
          });
        
      }
    ).catch(
      (error) => {
        return res.status(400).json({
          status: 400,
          sucess: false,
          message: `Wrong 'id'`,
          error: error.message
        });
        console.log(" errr" + error);
      }
    );
  } else {
    // Handle any other HTTP method
  }
}