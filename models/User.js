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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user" 
    },
    password: {
        type: String,
        required: true,
    },
});

// UserSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.User || mongoose.model('User', userSchema)