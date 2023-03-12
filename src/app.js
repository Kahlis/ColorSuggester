import express from "express";
import suggestRoutes from "./routes/suggest.routes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
app.use(express.json());

app.use("/suggest", suggestRoutes);
app.use(errorMiddleware);

export default app;