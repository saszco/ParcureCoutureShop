require('dotenv').config();
const app = require('./app.js')
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
} )
