import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (userId) => {
  console.log("Generating token", userId);
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "17d",
  });
};

export default generateToken;
