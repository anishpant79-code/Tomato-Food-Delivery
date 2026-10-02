import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from "dns";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Started on http://localhost:${port}`);
    });
});

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working");
});
