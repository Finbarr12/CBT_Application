import mongoose from "mongoose";

const Uri = "mongodb://127.0.0.1/cbtApplication";

const dbConnect = mongoose
  .connect(Uri)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    throw err;
  });

export default dbConnect;
