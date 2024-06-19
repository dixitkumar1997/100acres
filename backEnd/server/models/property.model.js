import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    propertyImage: {
      type: String, // cloudinary url
      required: true,
  },
    location: {
      type: String,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },

    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    hospitalsNearby: {
      type: String,
      required: true,
    },
    collegesNearby: {
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required:true
    }
  },
  {
    timestamps: true,
  }
);

export const Property = mongoose.model("Property", propertySchema);
