// import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  account_name: {
    type: String,
    required: true,
  },
  account_size: {
    type: Number,
    min: 10,
  },
  currency: {
    type: String,
    enum: ['usdt', 'usd', 'eur'],
  },
  account_type: {
    type: String,
    enum: ['forex', 'crypto'],
  },
});

// UserSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.Account || mongoose.model('Account', accountSchema)