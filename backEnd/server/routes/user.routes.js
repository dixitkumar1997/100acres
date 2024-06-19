import { Router } from "express";
import { registerUser,loginUser, logoutUser,refreshAccessToken} from "../controllers/user.controller.js";
import multer from 'multer'
import { verifyJWT } from "../middlewares/auth.middleware.js";


const upload=multer()

const router= Router()


// Public Routes

router.route("/register").post(upload.none(),registerUser)
router.route("/login").post(upload.none(),loginUser)
// router.post("/forgot-password", upload.none(), forgotPassword);
// router.post("/reset-password/:resetToken", upload.none(), resetPassword);



//Secured routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)


export default router