import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers["Authorization"];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    if (!token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyToken;
    next();
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
