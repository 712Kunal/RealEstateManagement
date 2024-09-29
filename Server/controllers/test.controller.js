import jwt from "jsonwebtoken";

const shouldBeLoggedIn = async (req, res) => {
  //WHEN USER LOGGED IN, THIS CONTROLLER SHOULD VERIFY HIS TOKEN WHICK IS STORED IN COOKIES
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).json({ message: "Not Authenticated!!" });
  }

  jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Not Authenticated!!" });
    } else {
      res.status(200).json({ message: "Authenticated!!" });
    }
  });

};

const shouldBeAdmin = async (req, res) => {};

export { shouldBeLoggedIn, shouldBeAdmin };
