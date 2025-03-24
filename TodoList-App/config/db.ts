import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/todolist')
    .then(() => console.log('Connected to database'));

export const db = mongoose.connection;