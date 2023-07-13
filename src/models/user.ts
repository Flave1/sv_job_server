import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    socketId: {type: String, required: true},
    userId: { type: String, required: true},
    email: {type: String, required:  true}
})

export const UserModel = mongoose.model('User', UserSchema)