import { app } from './app'
import { friendRouter } from './routes/friendRouter'
import { postRouter } from './routes/postRouter'
import { userRouter } from './routes/userRouter'

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friend', friendRouter)