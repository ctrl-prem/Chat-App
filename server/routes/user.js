import express from 'express';
import { login, newUser } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';

const app = express.Router(); //express.Router(); is limited for routing purpose makes it effecient to use method and define routes(like, app.get('/', login), while express() have full range of functionalities.)

app.post("/new", singleAvatar, newUser); // whatever we pass in method calling(this) 1st we pass path("/new" here) and then middlewares(are the functions that would execute before giving the response to the particular request).
// Middlewares are functions that take arguments (req, res, next) the third argument(next) execute the next middleware in line like if call next in singleAvatar(above call) then newUser will be executed.

app.post("/login", login);

export default app;