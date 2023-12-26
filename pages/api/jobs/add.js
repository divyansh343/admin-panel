import Job from "@/models/Job";

export default async function handler(req, res) {
  // mongoConnect()
  if (req.method === 'POST') {
    const job = new Job(req.body);
    job.save().then(
      (response) => {
        res.status(201).json({
          status: 201,
          sucess: true,
          message: `job created sucessfully`,
          response: response,
        });
      }
    ).catch(
      (error) => {
        res.status(401).json({
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