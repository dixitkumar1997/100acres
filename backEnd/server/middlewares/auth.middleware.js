import { User } from "../models/User.model.js"
import {ApiError} from "../utils/ApiError.js" 
import {asyncHandler} from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken";

export const verifyJWT=asyncHandler(async(req,_,next)=>{
    try {
        console.log(req.cookies)
        const token=req.cookies?.accessToken || req.header(("Authorization")?.replace("Bearer ",""))
        console.log(token)
    
    
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }
    
        const decodedInfo=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedInfo?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user=user;
        next()
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Access Token")
    }
})




export const sellerOnly = (req, _, next) => {
    if (req.user.userType !== 'seller') {
        throw new ApiError(401,"You are not a Authorized on this page as you are not a seller")
    }
    next();
  };