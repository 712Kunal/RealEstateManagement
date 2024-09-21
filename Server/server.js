import express from "express";
import postsRoute from "./Routes/posts.routes.js"
import authRoute from "./Routes/auth.routes.js"
import ENV_VARIABLES from "./constants.js"
// import userRoute from "./Routes/user.routes.js"

const app = express();
const port = ENV_VARIABLES.PORT;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("kjddk;")
})

app.use("/api/posts",postsRoute);
app.use("/api/auth",authRoute);
// app.use("/api/user",userRoute);

//If error occured while connecting to the server
app.use((req,res,err) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.errorMessage || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        StatusCode: statusCode,
        Error: errorMessage
    })
})

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
