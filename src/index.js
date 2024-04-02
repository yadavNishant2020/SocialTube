import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.error("MONGO DB connection failed !!", err);
    })


























































// import { express } from "express";

// const app = express()

// const PORT = PROCESS.env.PORT;

// (async () => {
//     try {
//         await mongoose.connect(`${PROCESS.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", () => {
//             console.error("EXPRESS ERROR: ", error);
//             throw error
//         })

//         app.listen(PORT, () => {
//             console.log(`App is runnning ${PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error
//     }
// })()