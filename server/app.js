import express from 'express';
import userRoute from './routes/user.js';
import { connectDB } from './utils/features.js';

import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';
dotenv.config({
    path: './.env',
});
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3001;
// const port = 3000;

connectDB(mongoURI); // It should be called before any route.

const app = express();

app.use(express.json()); // Parse the JSON format to JS object. {"name": "prem", "age": 25} to {name: "prem", age: 25}
// express.urlencoded() - use to Parse form data.
// app.get('/', ()=>{});

// "/user" we are setting up initial path, now path will be followed in userRoute
// if here:- htttps://localhost:3000/user then in userRoute:- https://localhost:3000/user/... , It's like adding prefix to path.
app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});