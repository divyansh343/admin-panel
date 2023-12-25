import mongoConnect from '../../../utils/mongodb'
import Job from '@/models/Job';
export const config = {
  api: {
    responseLimit: '12mb',
  },
}
export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1;
      const itemsPerPage = 15;
      const startIndex = (page - 1) * itemsPerPage;
  
      let query = {};
  
      // Check if the location query parameter is provided
      if (req.query.location) {
        query.location = {
          $regex: new RegExp(req.query.location, 'i')
        };
        console.log(req.query.location);
      }
  
      // Check if the job_title query parameter is provided
      if (req.query.search) {
        query.job_title = {
          $regex: new RegExp(req.query.search, 'i')
        };
      }
  
      // Check if the isRemote query parameter is provided
      if (req.query.isRemote) {
        query.isRemote = req.query.isRemote === "true";
      }
  
      // Check if the isInternship query parameter is provided
      if (req.query.isInternship) {
        query.isInternship = req.query.isInternship === "true";
      }
  
      const totalJobs = await Job.countDocuments(query);
  
      const jobs = await Job.find(query)
        .sort({
          posted_on: -1
        }) // Sort by 'posted_on' in descending order (latest first)
        .skip(startIndex)
        .limit(itemsPerPage);
  
      res.status(200).json({
        status: 200,
        success: true,
        count: totalJobs,
        currentPage: page,
        totalPages: Math.ceil(totalJobs / itemsPerPage),
        response: jobs,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        error: error.message,
      });
      console.error(error);
    }
  } else {
    // Handle any other HTTP method
  }
}