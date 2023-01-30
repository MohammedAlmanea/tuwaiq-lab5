import express from 'express';
import { parkSchema, ParkTypeSchema } from '../zodSchema/parkSchema';
import Validate from '../middleware/validate';

const router = express.Router();

let rides: ParkTypeSchema[] = [];

router.get('/park', (req, res) => {
  res.status(200).json(rides);
});

router.post('/park', Validate(parkSchema), (req, res) => {
  const newRide = req.body;
  rides.push(newRide);
  res.status(201).json(rides);
});

router.put('/park', Validate(parkSchema), (req, res) => {
  const updatedRide = req.body;
  rides = rides.filter((ride) => ride.id !== updatedRide.id);
  rides.push(updatedRide);
  res.status(200).json(rides);
});

router.delete('/park', Validate(parkSchema), (req, res) => {
  const rideToDelete = req.body;
  rides = rides.filter((ride) => ride.id !== rideToDelete.id);
  res.status(200).json(rides);
});

export default router;
