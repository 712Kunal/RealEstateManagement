import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import postsRoute from "./Routes/posts.routes.js";
import authRoute from "./Routes/auth.routes.js";
import testRoute from "./Routes/test.routes.js";
import ENV_VARIABLES from "./constants.js";
// import userRoute from "./Routes/user.routes.js"

const app = express();
const port = ENV_VARIABLES.PORT;

app.use(
  cors({
    origin: ENV_VARIABLES.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/test", testRoute);
// app.use("/api/user",userRoute);

// IF ERROR OCCURED WHILE CONNECTING TO THE SERVER
app.use((req, res, err) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.errorMessage || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    StatusCode: statusCode,
    Error: errorMessage,
  });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
