import jwt from "jsonwebtoken";
import ENV_VARIABLES from "../constants.js";

const userMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return res.status(401).json({ message: "You are not authenticated!!" });
    }

    const splitted_words = token.split(" ");
    const actualToken = splitted_words[1];
    const decoded_value = jwt.verify(actualToken, ENV_VARIABLES.JWT_SECRETKEY);

    // IF DECODED_VALUE CONTAINS ID THEN THE USER IS VERIFIED SUCCESSFULLY
    if (decoded_value.id) {
      console.log(decoded_value.id);
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Id is not present in the jwt token" });
    }
  } catch (error) {
    console.error(`User middleware error - ${error}`);
    res.status(400).json({ message: "Token is not verified successfully!!" });
  }
};

export default userMiddleware;
