const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type:String, required: true },
    lastName: { type:String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model ('Users',UserSchema);