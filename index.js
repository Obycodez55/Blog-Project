import express from "express";
import expressLayout from "express-ejs-layouts";
import { render } from "ejs";
import * as dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");



app.use("/", import("./server/routes/main"));
routes.initialize(app);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
