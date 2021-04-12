//const mongoose = require('mongoose');
'use strict'

import mongoose from 'mongoose';

const {Schema} = mongoose

const UserSchema = new Schema({
    _id: {type:Number, default:''},
    Nombre: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: ''}
})

module.exports = mongoose.model('User', UserSchema)