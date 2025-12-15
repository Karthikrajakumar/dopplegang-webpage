import express from "express";
import { db } from "../firebase.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await db.collection("contacts").add({
      name,
      email,
      phone: phone || "",
      message,
      createdAt: new Date(),
      ip: req.ip,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
