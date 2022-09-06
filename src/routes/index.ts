import { Router } from 'express'
import login from './login'
import products from './products'
import recipes from './recipes'
import users from './users'
import lists from './lists'

const router = Router()

router.use('/login', login)
router.use('/products', products)
router.use('/recipes', recipes)
router.use('/users', users)
router.use('/lists', lists)

export default router
