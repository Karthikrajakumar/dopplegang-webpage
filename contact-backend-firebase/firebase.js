import admin from "firebase-admin";
import fs from "fs";

/* ---------- Load service account safely ---------- */
let serviceAccount;

const envKey = process.env.FIREBASE_SERVICE_ACCOUNT;

if (envKey && envKey.trim().startsWith("{")) {
  serviceAccount = JSON.parse(envKey);
} else {
  serviceAccount = JSON.parse(
    fs.readFileSync("./serviceAccountKey.json", "utf8")
  );
}

/* ---------- Initialize Firebase ONCE ---------- */
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
