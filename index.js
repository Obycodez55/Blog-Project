import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let post = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create_post", (req, res) => {
  res.render("create_post.ejs");
});

app.post("/home", (req, res) => {
  const header = req.body.post_heading;
  const content = req.body.post_content;

  const newPost = {
    header: header,
    content: content
  }
  post.push(newPost);
  const postData = {
    post: post
  }
  res.render("index.ejs", postData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
