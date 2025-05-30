import {PrismaClient} from "@prisma/client"
import { config } from "dotenv";
config(); 
const prisma = new PrismaClient()

prisma.$connect().then(()=>{
    console.log("Connection with DB successful");
}).catch((err)=>{
    console.log("Connection with Db failed");
    console.error(err.message);
})

export default prisma;