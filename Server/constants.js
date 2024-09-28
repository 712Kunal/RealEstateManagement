import dotenv from "dotenv";
dotenv.config();

const ENV_VARIABLES = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.LOCALDB_URL,
  LOCALDB_URI: process.env.LOCALDB_URL,
  JWT_SECRETKEY: process.env.JWT_SECRET_KEY,
  CLIENT_URL: process.env.CLIENT_URL,
  SENDERS_MAIL: process.env.SENDER_MAIL,
  PASSWORD: process.env.PASS
};

export default ENV_VARIABLES;
