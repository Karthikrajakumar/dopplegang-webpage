

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoute from "./routes/contact.js";
import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be first

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------- Middleware ---------- */
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(
  "/api/",
  rateLimit({
    windowMs: 60 * 1000,
    max: 20,
  })
);

/* ---------- Routes ---------- */
app.use("/api/contact", contactRoute);

app.get("/health", (_, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅ `);
});
