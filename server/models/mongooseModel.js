import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    googleId: String,
    facebookId: String,
    todos: [TodoSchema]
});

UserSchema.plugin(findOrCreate);
const User = mongoose.model("USER", UserSchema);

export default User;