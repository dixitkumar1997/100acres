import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Property } from "../models/property.model.js";
import { ApiResponse } from "../utils/ApiiResponse.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"



const createProperty=asyncHandler(async(req,res)=>{
 console.log(req.user)

   try {
     const { location, area, bedrooms, bathrooms, hospitalsNearby, collegesNearby,price} = req.body;
 

     if(
        [location,area,bedrooms,bathrooms,hospitalsNearby,collegesNearby,price].some((field)=>
            field.trim()==="")
        ){
            throw new ApiError(400,"All fields are required")
        }
        const propertyImageLocalPath = req.files?.propertyImage[0]?.path;
        // console.log(propertyImageLocalPath)

        if (!propertyImageLocalPath) {
          throw new ApiError(400, "Property Image file is required")
      }


      const propertyImage = await uploadOnCloudinary(propertyImageLocalPath);
      console.log(propertyImage.url)

      if (!propertyImage) {
        throw new ApiError(400, "Property Image file is required")
    }
     
     const property = await Property.create({
         seller: req.user.id,
         propertyImage:propertyImage.url,
         location,
         area,
         bedrooms,
         bathrooms,
         hospitalsNearby,
         collegesNearby,
         price
       });
       console.log(req.user)
       return res.status(201).json(
         new ApiResponse(200,property,"Property added successfully")
     )
   } catch (error) {
    throw new ApiError(500,error?.message || "Server Error")
  }
    
})



// Get all properties
const getProperties = asyncHandler(async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
  
    try {
      // Fetch properties with pagination
      const properties = await Property.find()
        .skip(skip)
        .limit(limit)
        .populate('seller', 'firstName lastName email');
  
      // Count total number of properties
      const totalProperties = await Property.countDocuments();
  
      // Calculate total pages
      const totalPages = Math.ceil(totalProperties / limit);
  
      return res.status(201).json(
        new ApiResponse(200,{
        properties,
        totalPages,
        currentPage: page,
        pageSize: limit,
        totalProperties,
      },"All Properties data is recieved"));
    } catch (error) {
        throw new ApiError(500,error?.message || "Server Error")
    };
  });



// Get a property by ID
  const getPropertyById = asyncHandler(async (req, res) => {
    try {
      const property = await Property.findById(req.params.id).populate('seller', 'firstName lastName email');
      if (!property) {
        throw new ApiError(400,"Property not found");
      }
      return res.status(201).json(
        new ApiResponse(200,property, "Property data of given id is recieved"));
    } catch (error) {
        throw new ApiError(500,error?.message || "Server Error")
    }
  });



  // Update a property
const updateProperty = asyncHandler(async (req, res) => {
  console.log(`Request ID: ${req.params.id}`);
  console.log(req.body)
  console.log(req.files)
  const { location, area, bedrooms, bathrooms, hospitalsNearby, collegesNearby,price } = req.body;

  const propertyImageLocalPath = req.files?.propertyImage[0]?.path;

        if (!propertyImageLocalPath) {
          throw new ApiError(400, "Property Image file is required")
      }


      const propertyImage = await uploadOnCloudinary(propertyImageLocalPath);

      if (!propertyImage) {
        throw new ApiError(400, "Property Image file is required")
    }

  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
        throw new ApiError(400,"Property not found")
    }
    if (property.seller.toString() !== req.user.id) {
        throw new ApiError(401,"Not Authorized")
    }
    
    property.propertyImage=propertyImage.url || property.propertyImage
    property.location = location || property.location;
    property.area = area || property.area;
    property.bedrooms = bedrooms || property.bedrooms;
    property.bathrooms = bathrooms || property.bathrooms;
    property.hospitalsNearby = hospitalsNearby || property.hospitalsNearby;
    property.collegesNearby = collegesNearby || property.collegesNearby;
    property.price=price || property.price;
    const updatedProperty=await property.save();
    if(!updatedProperty){
        throw new ApiError(404,"Property not found");
    }
    return res.status(201).json(
        new ApiResponse(200,updatedProperty,"data updated successfully"));
     } catch (error) {
    throw new ApiError(500,error?.message || "Server Error")
  }
});



// Delete a property
const deleteProperty =asyncHandler(async (req, res) => {
  console.log('Property ID:', req.params.id);
  console.log(req.user)
    try {
      const property = await Property.findById(req.params.id);
      console.log(property)
      if (!property) {
        throw new ApiError(404,"Property not found");
      }
      if (property.seller.toString() !== req.user.id) {
        throw new ApiError(401,"Not Authorized")
      }
      // await property.remove();
      await Property.deleteOne({ _id: req.params.id });
      return res.status(201).json(new ApiResponse(200,"Property removed" ));
    } catch (error) {
        throw new ApiError(500,error?.message || "Server Error")
    }
  });



export {
    createProperty,
    getProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
}


