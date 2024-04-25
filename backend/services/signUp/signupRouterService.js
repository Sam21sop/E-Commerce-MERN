import { Router } from "express";
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from "./signupControllerService.js";
import { isAutherizedUser } from "../../middlewares/authMiddleware.js";


const signUpRouter = Router();

signUpRouter.post('/register', registerUser);
signUpRouter.post('/auth', authUser);
signUpRouter.post('/logout', logoutUser);
signUpRouter.route('/auth').get(isAutherizedUser, getUserProfile).put(isAutherizedUser, updateUserProfile);


export default signUpRouter;