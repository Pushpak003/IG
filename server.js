import express from "express";
import { PORT } from "./src/config/appConfig.js";
import reelRoutes from "./src/routes/reelRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/reels", reelRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
