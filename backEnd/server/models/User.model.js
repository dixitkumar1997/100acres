import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { promisify } from 'util';
import { createHash, randomBytes } from 'crypto';

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ["buyer", "seller"],
      required: true,
    },
    refreshToken: {
      type: String,
    },
    // resetPasswordToken:{
    //   type: String
    // },
    // resetPasswordExpire:{
    //   type: Date
    // },
  },
  {
    timestamps: true,
  }
);

// to encrypt the password
// pre is a middleware used to invoke a function just before the "save"
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// creating a method in "user" to verify the password with the encrypted password

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
      phoneNumber: this.phoneNumber,
      firstName: this.firstName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

// userSchema.methods.generatePasswordResetToken = async function() {
//   // Generate a random token
//   const resetToken = await promisify(randomBytes)(20);;
  
//   // Hash the reset token
//   this.resetPasswordToken = createHash('sha256').update(resetToken).digest('hex');

//   // Set the expiration time for the token
//   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes

//   // Return the unhashed reset token
//   return resetToken.toString('hex');
// };

export const User = mongoose.model("User", userSchema);
