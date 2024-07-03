import express from "express";

const app = express()

app.get('/', controllers.homeController)
app.get('/post', controllers.postController)

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})