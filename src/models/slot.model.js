import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const slotSchema = new Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Booked", "Unavailable"],
      required: true,
    },
    dayOfWeek: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
    doctorID: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Slot = mongoose.model("Slot", slotSchema);
