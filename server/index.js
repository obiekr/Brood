const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const toId = mongoose.Types.ObjectId
const path = require("path")

const {User, Post, Comment} = require("./schemas")
const PORT = process.env.PORT || 1337

app.use(cors())
app.use(express.json()) 
mongoose.connect('mongodb+srv://first:first@cluster0.qa3ym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
    // databases: [mongoDB],
    resources: [User, Post, Comment],
    rootPath: '/admin',
  })

app.use(adminJs.options.rootPath, AdminJSExpress.buildRouter(adminJs))


// register user
app.post('/api/register', async (req, res)=>{
    try{
        await User.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            reputation: 0,
        })
        return res.json({status: "ok"})
    }catch(err){
        return res.json({status: "Error", error: "Your email has been used"})
    }
})

// login user
app.post('/api/login', async (req, res)=>{
    const user = await User.findOne({
        email: req.body.email, 
        password: req.body.password
    })
    
    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email,

        }, "secret123")
        console.log(req.body)
        return res.json({ status: "ok", user: token})
    }else{
        return res.json({ status: "error", user: false, msg:"Invalid email or password"})
    }
})

// create new post
app.post('/api/create', async (req, res)=>{
    try{
        await Post.create({
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags,
            op: toId(req.body.op),
            date: new Date(),
        })
        return res.json({status: "ok"})
    }catch(err){
        return res.json({status: "Error", error: err})
    }
})

// generate all post
app.get('/api/main', async (req, res)=>{
    const posts = await Post.find({}).sort({
        date: -1
    })
    return res.json(posts)
})


// create comment
app.post('/api/createComment', async (req, res)=>{
    try{
        await Comment.create({
            content: req.body.content,
            post: toId(req.body.post),
            op: toId(req.body.op),
            date: new Date(),
        })
        return res.json({status: "ok"})
    }catch(err){
        return res.json({status: "Error", error: err})
    }
})

// get all comment
app.post('/api/getComment', async (req, res)=>{
    const comment = await Comment.find({
        post: toId(req.body.id)
    }).sort({
        date: -1
    })
    return res.json(comment)
})

// find user name and id using email
app.post('/api/user', async (req, res)=>{
    const user = await User.findOne({
        email: req.body.email, 
    })
    if(user){
        return res.json({ status: "ok", user: {name: user.name, _id: user._id, reputation:user.reputation}})
    }else{
        return res.json({ status: "error", user: null})
    }
})

// find op name using id
app.post('/api/op', async (req, res)=>{
    const user = await User.findById(toId(req.body.op))
    if(user){
        return res.json({ status: "ok", name: user.name})
    }else{
        return res.json({ status: "error", user: null})
    }
})

if (process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname,"../client/build/index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`started on ${PORT}`)
})
