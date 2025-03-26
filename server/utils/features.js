import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000, //(1 day = 24(hrs.) * 60(mins.) * 60(sec.) * 1000(milli-sec.))
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const connectDB = (uri) => {
  // uri, we get it from the mongoDB application.
  mongoose
    .connect(uri, { dbName: "chatFirstDB" })
    .then((data) => {
      console.log(`Connect to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err; // throw stops the further execution the time it finds the error
    });
};

const sendToken = ( res, user, code, message ) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  // console.log(token)
  return res.status(code).cookie("Chat-App", token, cookieOptions).json({
    success: true,
    // token,
    message,
    // user,
  });
};

export { connectDB, sendToken };
