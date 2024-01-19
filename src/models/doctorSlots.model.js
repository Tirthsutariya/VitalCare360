import mongoose, { Schema } from "mongoose";


const doctorSlotsSchema = new Schema(
  {
    doctorID: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    timeSlots: [
      {
        type: Schema.Types.ObjectId,
        ref: "Slot",
        required: true
      }
    ]
  },
  {
    timestamps: true,
  }
);

  

export const Slot = mongoose.model("DoctorSlot", doctorSlotsSchema);
