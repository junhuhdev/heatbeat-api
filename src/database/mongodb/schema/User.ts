import mongoose from "mongoose";
import { UsersCollection } from "./Collections";

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    name: String,
    first_name: String,
    last_name: String,
    age: Number,
    country: String,
    city: String,
    address: String,
    dob: String,
    gender: {type: String, uppercase: true, default: "UNKNOWN"},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},

});

const User = mongoose.model(UsersCollection, UserSchema);
export default User;
