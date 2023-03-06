const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://sakurasoft9924:QWbDiW0qpWXk0Qdh@cluster0.wzowfo9.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
};

start();
