const express = require('express');
const cors = require('cors')
const app = express();
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/admin')
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors())

//all Admin routes link
app.use('/admin',adminRouter)

//all Users routes link
app.use("/user",userRouter)

//Db connection

mongoose.connect('mongodb://localhost:27017/course-selling-app',
{useNewUrlParser:true , useUnifiedTopology:true , dbName: "course-selling-app"})

app.listen(3000, () => console.log('Server running on port 3000'));
