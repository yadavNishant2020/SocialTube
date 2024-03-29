import { express } from "express";

const app = express();

PORT = process.env.PORT;

app.listen({req, res}, () =>{
console.log(`Server is running at port: ${PORT}`);
})