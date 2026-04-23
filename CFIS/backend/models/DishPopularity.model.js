import mongoose from 'mongoose';

const dishPopularitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  normalizedName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  menuPopularityScore: {
    monday: { type: Number, default: 1, min: 1, max: 10 },
    tuesday: { type: Number, default: 1, min: 1, max: 10 },
    wednesday: { type: Number, default: 1, min: 1, max: 10 },
    thursday: { type: Number, default: 1, min: 1, max: 10 },
    friday: { type: Number, default: 1, min: 1, max: 10 },
    saturday: { type: Number, default: 1, min: 1, max: 10 },
    sunday: { type: Number, default: 1, min: 1, max: 10 }
  },
  // Keep for backward compatibility
  popularityScore: {
    type: Number,
    min: 1,
    max: 10,
  },
  category: {
    type: String,
    default: 'General',
  },
}, {
  timestamps: true,
});

const DishPopularity = mongoose.model('DishPopularity', dishPopularitySchema);

export default DishPopularity;
