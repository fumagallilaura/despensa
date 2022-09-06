import { Router } from 'express'
import login from './login'
import products from './products'
import sales from './sales'

const router = Router()

router.use('/login', login)
router.use('/products', products)
router.use('/sales', sales)

export default router
