import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance}`);

    } catch (error) {
        console.error("MONGODB CONNECTION FAILED: ", error);
        process.exit(1)
    }
}

export default connectDB