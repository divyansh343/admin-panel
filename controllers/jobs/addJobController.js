// import Job from "../../models/Job";

// const addJobController = async (req, res) => {
//   const job = new Job(req.body);

//   job.save().then(
//     (response) => {
//       res.status(201).json({
//         status: 201,
//         sucess: true,
//         message: `job created sucessfully`,
//         response: response,
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(401).json({
//         status: 401,
//         sucess: false,
//         error: error
//       });
//       console.log(error);
//     }
//   );
// }
// export {
//   addJobController
// }