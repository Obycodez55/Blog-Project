import express from "express";
// import bodyParser from "body-parser";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, world!");
})

// app.use(bodyParser.urlencoded({ extended: true }));

// let post = [];

// router.get("/", (req, res) => {
//   res.render("index.ejs");
// });

// router.get("/create_post", (req, res) => {
//   res.render("create_post.ejs");
// });

// router.post("/home", (req, res) => {
//   const header = req.body.post_heading;
//   const content = req.body.post_content;

//   const newPost = {
//     header: header,
//     content: content
//   }
//   post.push(newPost);
//   const postData = {
//     post: post
//   }
//   res.render("index.ejs", postData);
// });

module.exports = router ;