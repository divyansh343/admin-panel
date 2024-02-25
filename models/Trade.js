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
  pnl: {
    type: Number,
    default: 0
  },
  roi: {
    type: Number,
    default: 0
  },
  profitable: {
    type: String,
    enum: ['profit', 'loss'],
    required: true,
  },
  status: {
    type: String,
    enum: ['running', 'tp', 'sl', 'closed'],
    required: true,
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