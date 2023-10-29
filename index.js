import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var post = "";

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create_post", (req, res) => {
  res.render("create_post.ejs");
});

app.post("/home", (req, res) => {
  const header = req.body.post_heading;
  const content = req.body.post_content;

  post =
    post + "<div><h1>" + header + "</h1>" + "<p>" + content + "</p> </div>";
  const postData = {
    post: post
  }
  res.render("index.ejs", postData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
