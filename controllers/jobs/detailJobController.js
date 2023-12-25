import Job from "../../models/Job";

const detailJobController = async (req, res) => {
  Job.findOne({
    _id: req.query.job
  }).then(
    (response) => {
      res.status(200).json({
        status: 200,
        sucess: true,
        response: response,
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        status: 400,
        sucess: false,
        message: `Wrong 'id'`,
        error: error.message
      });
      console.log(" errr" + error);
    }
  );
}
export {
  detailJobController
}