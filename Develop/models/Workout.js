// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define WorkoutSchema
const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "type is Required"
  },

  name: {
    type: String,
    trim: true,
  },

  distance: {
    type: Number,
    trim: true,
  },

  duration: {
    type: Number,
    trim: true,
  },  
  
  weight: {
    type: Number,
    trim: true,
  },
  
  sets: {
    type: Number,
    trim: true,
  },
  
  reps: {
    type: Number,
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now
  },

  totalDuration: Number,

  numExercises: Number,

  totalWeight: Number,

  totalSets: Number,

  totalReps: Number,
  
  totalDistance: Number
});

// TODO add custom methods here:



// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the Workout model
module.exports = Workout;
