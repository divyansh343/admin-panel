import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import { addJobController } from "../../../controllers/jobs/addJobController";
const handler = nc;
mongoConnect()

handler.post(addJobController)

export default handler;