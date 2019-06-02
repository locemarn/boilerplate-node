import express from 'express'
import postsRoute from './posts'

const router = express.Router()

router.use('/posts', postsRoute)

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Return API data is ok'
  })
})

export default router
