import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const appointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    slot: {
        type: Schema.Types.ObjectId,
        ref: "Slot"
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["pending","confirmed","canceled"],
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
