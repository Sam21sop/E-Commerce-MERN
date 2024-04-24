import { Router } from "express";
import { authUser } from "./signupControllerService.js";

const signUpRouter = Router();


signUpRouter.post('/auth', authUser);


export default signUpRouter;