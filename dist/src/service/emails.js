"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailUser = exports.pathData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.pathData = path_1.default.join(__dirname, "../repositories/emails.json");
const emailUser = async () => {
    const rawData = fs_1.default.readFileSync(exports.pathData, "utf-8" /* Encoding.UTF8 */);
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
};
exports.emailUser = emailUser;
//# sourceMappingURL=emails.js.map