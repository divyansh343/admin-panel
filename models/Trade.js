// import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose'

const tradeSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  accid: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  position_type: {
    type: String,
    enum: ['short', 'long'],
    required: true,
  },
  margin: {
    type: Number,
    default: 0
  },
  leverage: {
    type: Number,
    default: 0
  },
  profit: {
    type: Number,
    default: 0
  },
  loss: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  }

});

// UserSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.Trade || mongoose.model('Trade', tradeSchema)