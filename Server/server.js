import express from "express";
const app = express();
const port = 3005;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("hii there");
});

app.listen(port, (port) => {
  console.log(`App is running on ${port}`);
});
