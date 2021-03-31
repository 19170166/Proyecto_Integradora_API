//const mongoose = require('mongoose');

import mongoose from 'mongoose';

const {Schema} = mongoose

const UserSchema = new Schema({
    Nombre: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: ''}
})