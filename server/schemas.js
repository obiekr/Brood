const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    reputation: {type:Number, required:true},
    age: {type:Number, required:true},
}, { collection: "user-data"})

const CommentSchema = new mongoose.Schema({
    content: {type:String, required:true},
    post: {type:mongoose.Types.ObjectId, required:true},
    op: {type:mongoose.Types.ObjectId, required:true},
    date: {type: Date, required:true}
}, { collection: "comment-data"})

const PostSchema = new mongoose.Schema({
    title: {type:String, required:true},
    content: {type:String, required:true},
    op: {type:mongoose.Types.ObjectId, required:true},
    tags: {type:String, required:true},
    date: {type: Date, required:true},
}, { collection: "post-data"})

const User = mongoose.model("UserData", UserSchema)
const Post = mongoose.model("PostData", PostSchema)
const Comment = mongoose.model("CommentData", CommentSchema)

module.exports = {User, Post, Comment}
