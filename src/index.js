import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()


























































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