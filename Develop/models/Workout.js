const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define WorkoutSchema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate()))
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type is Required"
      },
    
      name: {
        type: String,
        trim: true,
        required: "name is Required"
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
    }
  ],
});

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

Workout.getTotalDuration = function () {
 return Workout.aggregate([
    {
        $addFields: { 
            totalDuration: { 
                $sum: '$exercises.duration'
            } 
        } 
    } 
  ])
}

// Export the Workout model
module.exports = Workout;