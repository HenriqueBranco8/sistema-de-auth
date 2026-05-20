"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const auth_controller_1 = require("./controller/auth-controller");
const server = http.createServer(async (request, response) => {
    //query string
    //localhost:3636/api/login?e=henriquebrancodasilvadias@gmail.com
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];
    if (request.method === "POST" /* HttpMethod.POST */ && request.url === '/api/login') {
        await (0, auth_controller_1.usersController)(request, response);
    }
    if (request.method === "GET" /* HttpMethod.GET */ && request.url === '/api/register') {
        await (0, auth_controller_1.UserRegister)(request, response);
    }
});
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}`);
});
//# sourceMappingURL=server.js.map