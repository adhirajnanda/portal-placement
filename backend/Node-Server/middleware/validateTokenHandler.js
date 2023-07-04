const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    // console.log(token, process.env.ACCESS_TOKEN_SECRET);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(401);
        throw new Error("User is no authorized");
      }

      // console.log(decoded);
      (req.student = decoded.student), (req.company = decoded.company);
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing !");
    }
  }
});

module.exports = validateToken;
