import { Router } from 'express'
import authorController from '../../controllers/author.controller'

const authorRouter = Router()

authorRouter.get('/add', authorController.renderAuthorRegistrationForm)
authorRouter.post('/add', authorController.registerBookAuthor)

export default authorRouter
