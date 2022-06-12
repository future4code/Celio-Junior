import express from "express"
import { FriendController } from "../controller/friendController"

export const friendRouter = express.Router()
const friendController = new FriendController()

friendRouter.post('/:idUser', friendController.create)
friendRouter.delete('/:userId', friendController.deleteFriendship)