import express from "express";
import { DogWalkController } from "../controller/DogWalkController"

export const dogWalkRouter = express.Router();
const dogWalkController = new DogWalkController();

dogWalkRouter.get('/', dogWalkController.allWalk)
dogWalkRouter.post('/walk', dogWalkController.createWalk)
dogWalkRouter.get('/show/:id', dogWalkController.showWalk)
dogWalkRouter.get('/start_walk/:id', dogWalkController.startWalk)
dogWalkRouter.get('/finish_walk/:id', dogWalkController.finishWalk)