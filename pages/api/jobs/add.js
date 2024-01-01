import Job from "@/models/Job";
import mongoConnect from "@/utils/mongodb";

export default async function handler(req, res) {
  mongoConnect()
  if (req.method === 'POST') {
    const job = new Job(req.body);
    job.save().then(
      (response) => {
       return res.status(201).json({
          status: 201,
          sucess: true,
          message: `job created sucessfully`,
          response: response,
        });
      }
    ).catch(
      (error) => {
        console.log(error)
       return res.status(401).json({
          status: 401,
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