import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiiResponse.js";
import { stringify } from "flatted";
import Mailgun from "mailgun-js";
import formData from "form-data";

// const mg = Mailgun({
// apiKey: process.env.MAILGUN_API_KEY,
// domain: process.env.MAILGUN_DOMAIN,
// });

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({apiKey: process.env.MAILGUN_API_KEY ,username: 'api'});

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontEnd
  // validation -not empty
  // check if user already exists : username or email
  // create user object - create entry in db
  // remove passwords and requestToken from res
  // check for user creation
  // return res

  const { firstName, lastName, email, phoneNumber, password, userType } =
    req.body;

  if (
    [firstName, lastName, email, phoneNumber, password, userType].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { phoneNumber }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or phone number already exist");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    userType: userType.toLowerCase(),
  });

  const createdUser = User.findById(user._id).select("-password -refreshToken");
  const createdUser2 = stringify(createdUser);
  console.log(createdUser2);

  if (!createdUser2) {
    throw new ApiError(500, "Something went wrong while registring a user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser2, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email
  //find the user
  //password check
  //access and referesh token
  //send cookies
  // send response

  const { email, phoneNumber, password } = req.body;

  if (!phoneNumber && !email) {
    throw new ApiError(400, "phoneNumber or email is required");
  }

  const user = await User.findOne({
    $or: [{ phoneNumber }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    // httpOnly: true,
    sameSite: "None",
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    domain: ".onrender.com",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

// const forgotPassword = asyncHandler(async (req, res) => {

//   const { email } = req.body;
//   console.log({email})

// //   // const mg = mailgun({
// //   //   apiKey: process.env.MAILGUN_API_KEY,
// //   //   domain: process.env.MAILGUN_DOMAIN
// //   // });

// Check if user exists
// const user = await User.findOne({ email });
// if (!user) {
//   throw new ApiError(404, "User does not exist");
// }

// // Generate a reset token
// const resetToken = await user.generatePasswordResetToken();

// await user.save();
// console.log(resetToken)

// // Send reset token to user's email

// console.log(resetUrl)

// const sendResetEmail = ({email}, resetToken) => {
//   const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

//   const data = {
//     from: process.env.MAILGUN_DOMAIN,
//     to: {email},
//     subject: 'Password Reset',
//     text: `Please use the following link to reset your password: ${resetUrl}`,
//   };
//   mg.messages().send(data, (error, body) => {
//     if (error) {
//       console.log('Error sending email:', error);
//     } else {
//       console.log('Email sent:', body);
//     }

//   res.status(200).json(new ApiResponse(200, {}, "Email sent"));
//   })

// }

// Check if user exists
// const user = await User.findOne({ email });
// if (!user) {
//   res.status(404);
//   throw new Error('User not found');
// }

// // Generate a reset token
// const resetToken = await user.generatePasswordResetToken();
// await user.save();

// // Send reset token to user's email
// const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

// const message = `
//   You are receiving this email because you (or someone else) has requested the reset of a password.
//   Please make a PUT request to:
//   ${resetUrl}
// `;

// try {
//   // const mailData = {

//   // };

//   // await mg.messages.create(process.env.MAILGUN_DOMAIN, mailData);

//   // res.status(200).json({ success: true, data: 'Email sent' });

//   mg.messages().send({
//     from:"mg@sandbox7bc518fa5dd04f83aa05077bc32bb4cc.mailgun.org",
//     to: user.email,
//     subject: "Password reset token",
//     text: message,
//     html: `<p>${message}</p>`
//   }, (error, body) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(body);
//     }
//   });
// } catch (err) {
//   console.error('Mailgun error:', err);
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;
//   await user.save();
//   res.status(500);
//   throw new Error('Email could not be sent');
// }
// });

//   // } catch (error) {
//   //   console.log(error);
//   //   user.resetPasswordToken = undefined;
//   //   user.resetPasswordExpire = undefined;

//   //   await user.save();

//   //   res.status(500);
//   //   throw new ApiError(500, "Email could not be sent");
//   // }
// });

// const resetPassword = asyncHandler(async (req, res) => {
//   const { resetToken } = req.params;
//   const { password } = req.body;

//   // Hash the token then find the user by token and make sure token has not expired
//   const hashedToken = createHash('sha256').update(resetToken).digest('hex');

//   try {
//     const user = await User.findOne({
//       resetPasswordToken: hashedToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user) {
//       throw new ApiError(400, "Invalid token");
//     }

//     // Verify the reset token
//     const isTokenValid = await bcrypt.compare(
//       resetToken,
//       user.resetPasswordToken
//     );

//     if (!isTokenValid) {
//       throw new ApiError(400, "Invalid or expired reset token.");
//     }

//     // Set new password
//     user.password = await hash(password, 10);
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json(ApiResponse(200, {}, "Password reset success"));
//   } catch (error) {
//     throw new ApiError(500, "Server Error");
//   }
// });

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
