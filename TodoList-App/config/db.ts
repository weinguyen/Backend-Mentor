import mongoose from 'mongoose';

export const db = () => {mongoose.connect('mongodb://localhost:27017/todolist')
    .then(() => console.log('Connected to database'));}

