import jwt from "jsonwebtoken";

const shouldBeLoggedIn = async (req, res) => {
  //WHEN USER LOGGED IN, THIS CONTROLLER SHOULD VERIFY HIS TOKEN WHICK IS STORED IN COOKIES
  console.log(req.user.id);

  res.status(200).json({ message: "You are logged in!!", userId: req.user.id });
};

const shouldBeAdmin = async (req, res) => {};

export { shouldBeLoggedIn, shouldBeAdmin };
