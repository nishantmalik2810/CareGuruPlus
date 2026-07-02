import "dotenv/config";
import app from "./app";

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🚀 CareGuruPlus Backend Started");
  console.log(`🌍 Server : http://localhost:${PORT}`);
  console.log(`📦 Environment : ${process.env.NODE_ENV}`);
  console.log("======================================");
});