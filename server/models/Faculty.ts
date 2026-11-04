
import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: "",
  },
  employeeId: {
    type: String,
    trim: true,
    default: "",
  },
  imageUrl: {
    type: String,
    default: null
  },
  
  biography: {
    type: String,
    default: "",
  },
  qualifications: {
    type: [String],
    default: [],
  },
  experience: {
    type: String,
    default: "",
  },
  teachingAreas: {
    type: [String],
    default: [],
  },
  researchInterests: {
    type: [String],
    default: [],
  },
  publications: {
    type: [
      {
        title: { type: String, required: true },
        year: Number,
        url: String,
      },
    ],
    default: [],
  },
  professionalMemberships: {
    type: [String],
    default: [],
  },
  nptelCertifications: {
    type: [String],
    default: [],
  },
  fdpsWorkshopsAttended: {
    type: [String],
    default: [],
  },
  resourcePersonActivities: {
    type: [String],
    default: [],
  },
  awards: {
    type: [String],
    default: [],
  },
  professionalLinks: {
    type: [
      {
        label: String,
        url: String,
      },
    ],
    default: [],
  },
}, {
  timestamps: true
});

export const Faculty = mongoose.model('Faculty', facultySchema);
