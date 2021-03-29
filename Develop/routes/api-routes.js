// Requiring the model
const Workout = require('../models/Workout');

// Routes

module.exports = (app) => {
// GET route for retrieving all workouts
  app.get('/api/workouts', (req, res) => {
    Workout.getTotalDuration()
        .then(dbWorkout =>  
            res.json(dbWorkout)
        )
        .catch(error =>
            res.status(400).json(error)
        )
  });

// PUT route for updating a single workout
  app.put('/api/workouts/:id', (req, res) => {
    console.log("id", req.params.id);
      Workout.findByIdAndUpdate(
        {
           _id: req.params.id 
        },
        {
            $push: { "exercises": req.body },
        }
        )
      .then(dbWorkout => res.json(dbWorkout))
      .catch((error) => res.status(400).json(error));
  });

// POST route for saving a new workout
    app.post('/api/workouts', (req, res) => {
        Workout.create(req.body)
            .then(dbWorkout => res.json(dbWorkout))
            .catch((error) => res.status(400).json(error));
    });

// GET route for getting range
    app.get('/api/workouts/range', (req, res) => {
        Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ])
        .sort({ day: -1 })
        .limit(7)
        .sort({ day: 1 })
        .then(dbWorkout => res.json(dbWorkout))
        .catch((error) => res.status(400).json(error));
    })
};
