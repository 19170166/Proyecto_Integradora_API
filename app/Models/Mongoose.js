'use strict'
const mongoose = use('Mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Mixed = mongoose.Schema.Types.Mixed
 
let userSchema = mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  dob: { type: Date },
  email: { type: String, default: '' },
  mobile: { type: String, default: '' },
  password: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  likes: { type: Mixed, default: {} },
  interests: [{ type: Mixed, default: {} }],
}, {
  timestamps: true
})
 
module.exports = mongoose.model('User', userSchema)
 