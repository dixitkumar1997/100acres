import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app= express()
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials:true,

// }));


import dotenv from 'dotenv';
dotenv.config();

const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [];

console.log('Allowed Origins:', allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    console.log('Request Origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('CORS error: Not allowed by CORS');
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log('CORS headers set for:', req.method, req.url);
  next();
});


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended:true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());



// Routes import

import userRouter from "./routes/user.routes.js";
import propertyRoutes from "./routes/property.routes.js"


// routes declaration

app.use("/api/v1/users",userRouter)
app.use('/api/properties', propertyRoutes);


export {app}