"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const PORT = Number(process.env.PORT) || 5000;
app_1.default.listen(PORT, () => {
    console.log("======================================");
    console.log("🚀 CareGuruPlus Backend Started");
    console.log(`🌍 Server : http://localhost:${PORT}`);
    console.log(`📦 Environment : ${process.env.NODE_ENV}`);
    console.log("======================================");
});
//# sourceMappingURL=server.js.map