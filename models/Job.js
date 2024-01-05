import mongoose from "mongoose";
// import mongooseUniqueValidator from 'mongoose-unique-validator';

const jobSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: [true, 'Please provide a postion name.'],
  },

  job_description: {
    type: String,
    maxlength: 10000,
  },

  location: {
    type: String,
  },

  salary: {
    value: {
      type: String
    },
    currency: {
      type: String,
    },
    per: {
      type: String,
      enum: ['year', 'month','hour']
    }
  },
  positions: {
    type: Number,
    default: 0
  },
  isRemote: {
    type: Boolean,
    default: false
  },

  isInternship: {
    type: Boolean,
    default: false
  },

  business_name: {
    type: String,
    // required: [true, 'Please provide location.'],
  },

  business_image: {
    type: String,
  },

  category: Array,

  apply_link: {
    type: String,
  },

  posted_on: {
    type: Date,
    default: Date.now
  },

})
// jobSchema.plugin(mongooseUniqueValidator);
export default mongoose.models.Job || mongoose.model('Job', jobSchema)