import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import interviewRouter from "./routes/interview.routes.js"
import paymentRouter from "./routes/payment.routes.js"

const app = express()
app.use(cors({
    origin: "https://prepnexus-client.onrender.com",
    credentials:true
}))


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview" , interviewRouter)
app.use("/api/payment", paymentRouter)


app.get("/", (req, res) => {
  res.send("Backend is running")
})

const PORT = process.env.PORT || 6000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    connectDb();
})

