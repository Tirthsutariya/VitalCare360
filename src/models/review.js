import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const reviewSchema = new Schema(
    {
      doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
      },
      patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
      },
      rating: {

      },
      reviewText: {
        type : String,
        required: true
      },
      date: {
        type : Date,
        required : true
      }
    },
    {
      timestamps: true,
    }
  );
  

export const Review = mongoose.model("Review", reviewSchema);
