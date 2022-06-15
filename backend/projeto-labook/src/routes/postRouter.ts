import express from "express"
import { PostController } from "../controller/postController"

export const postRouter = express.Router()
const postController = new PostController()

postRouter.get('/all', postController.getAllPosts)
postRouter.get("/:id", postController.find)
postRouter.post("/create", postController.create)