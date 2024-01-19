// import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose'

const requestSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String
    }
  },
  status : {
    type : Boolean,
    default : false
  },
});

// UserSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.Request || mongoose.model('Request', requestSchema)