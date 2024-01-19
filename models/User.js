// import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true // unique validator works on unique fields.
    },
    usertype: {
        type: String,
        enum: ['user', 'admin'],
        default: "user" 
    },
    image: {
        public_id: {
            type: String,
        },
        url: {
            type: String
        }
    },
    password: {
        type: String,
        required: true,
    },
});

// UserSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.User || mongoose.model('User', userSchema)