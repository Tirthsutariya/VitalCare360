import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const slotSchema = new Schema(
    {
      doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
      },
      startTime: {
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
        required: true,
      },
      bookedAppointments: [
        {
          patient: {
            type: Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
          },
          appointmentTime: {
            type: Date,
            required: true,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  

export const Slot = mongoose.model("Slot", slotSchema);
