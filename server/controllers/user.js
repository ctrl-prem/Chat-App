import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { tryCatch } from "../middlewares/error.js";

const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  console.log(req.body);

  const avatar = {
    public_id: "any",
    url: "any/any",
  };
  // await User.create({name: "Prem", username: "Prem", password: "password", avatar: avatar}); if we do not give any value, then it will take it from the req.body
  const user = await User.create({ name, bio, username, password, avatar }); // if we pass value for any field, it will overwrite the value that is comming(in req.body)

  // res.status(201).json({message: "Document/Resource/row has been added successfully"});
  // status code - 201 means new resource has been added successfully.

  sendToken(res, user, 201, "New resource has been added.");
};

const login = tryCatch(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password"); // will find and return user with username given and also add password to it(as password was labeled as not to be included while fetching as select: false)
  if (!user) return next(new Error("Invalid username")); //default behaviour:- new Error() in next directly go to last route handler(app.use(...))

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    return next(new Error("Invalid password"));
  }

  sendToken(res, user, 200, `Welcome back ${user.name}`);
});

const getMyProfile = () => {};

export { login, newUser, getMyProfile };
