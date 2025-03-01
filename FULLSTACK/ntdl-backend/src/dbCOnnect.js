import mongoose from "mongoose";

const mongoURL = "mongodb://127.0.0.1:27017/dev_genius";

const dbConnect = () => {
  try {
    const connectedDB = mongoose.connect(mongoURL);
    connectedDB && console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
