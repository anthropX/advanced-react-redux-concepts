const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
  title: { type: String, required: true }
})

module.exports = mongoose.model('comment', commentSchema)
