import mongoose from "mongoose";
import Trade from "./Trade";

// import mongooseUniqueValidator from 'mongoose-unique-validator';
const trade = {
  symbol: {
    type: String,
    required: true,
  },
  leverage: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  profit: {
    type: Number,
    required: true,
  },
  loss: {
    type: Number,
    required: true,
  },
  isProfit: {
    type: Boolean,
  },
  tradeDate: {
    type: Date,
    default: Date.now,
  },

}
const AccountSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  account_name: {
    type: String,
    required: [true, 'Please provide a postion name.'],
  },
  funds: {
    value: {
      type: Number
    },
    currency: {
      type: String,
      enum: ['USD', 'USDT', 'EUR']
    }
  },
  account_type: {
    type: String,
    enum: ['crypto', 'forex', 'other']
  },
  trades: [trade],
})

// AccountSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.Account || mongoose.model('Account', AccountSchema)