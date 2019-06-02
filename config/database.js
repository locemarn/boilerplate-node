import mongoose from 'mongoose'
require('dotenv').config()

mongoose.Promise = Promise

const mongodbUrl = process.env.MONGODB_URL || process.env.MONGODB_URL_TEST

const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true })

export default {
  connect
}
