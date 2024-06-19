import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT,sellerOnly } from "../middlewares/auth.middleware.js";
import { createProperty, deleteProperty, getProperties, getPropertyById, updateProperty } from "../controllers/property.controller.js";



const router= Router()



router.route('/')
  .post( upload.fields([
    {
        name: "propertyImage",
        maxCount: 1
    }
]), verifyJWT, sellerOnly, createProperty)
  .get(getProperties);

router.route('/:id')
  .get(getPropertyById)
  .put( upload.fields([
    {
        name: "propertyImage",
        maxCount: 1
    }
]),verifyJWT, sellerOnly, updateProperty)
  .delete(verifyJWT,sellerOnly, deleteProperty);


  export default router