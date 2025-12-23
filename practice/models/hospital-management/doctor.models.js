import mongoose from "mongoose";

const doctorInHospital = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  hoursPerWeek: {
    type: Number,
    required: true,
    default: 0,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    salary: {
      type: Number,
      required: true,
    },
    worksInHospitals: [
    //   {
    //     hospital: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Hospital",
    //     },
    //     hoursPerWeek: {
    //       type: Number,
    //       required: true,
    //       default: 0,
    //     },
    //   },
    // or
        doctorInHospital
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
