const ENV_VARIABLES = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.LOCALDB_URL,
  LOCALDB_URI: process.env.LOCALDB_URL,
  JWT_SECRETKEY: process.env.JWT_SECRET_KEY
};

export default ENV_VARIABLES;
