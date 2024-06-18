import express from 'express'; //E6 module use for import 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb server
 try{
       mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");
 }catch(error) {
      console.log("Error: ", error);
 }


 // definig Routes

 app.use("/book", bookRoute);
 app.use("/user", userRoute)

 app.listen(PORT, () => {
    console.log(`port is listening on ${PORT}`);
})