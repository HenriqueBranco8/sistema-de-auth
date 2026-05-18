"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routers/auth-routers.ts
var auth_routers_exports = {};
__export(auth_routers_exports, {
  authCompile: () => authCompile
});
module.exports = __toCommonJS(auth_routers_exports);
var authCompile = async (request, response) => {
  if (request.method === "POST" /* POST */) {
    let rawbBody = "";
    request.on("data", (chunk) => {
      rawbBody += chunk.toString();
    });
    request.on("end", () => {
      try {
        const parsedBody = JSON.parse(rawbBody);
        console.log("Dados recebidos:", parsedBody);
        response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" /* jsonUTF8 */ });
        response.end(JSON.stringify({
          message: "Dados recebidos com sucesso",
          dadosRecebidos: parsedBody
        }));
      } catch (error) {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" /* jsonUTF8 */ });
        response.end(JSON.stringify({ error: "Formato JSON inv\xE1lido" }));
      }
    });
  } else {
    response.writeHead(405, { "Content-Type": "text/plain" /* text */ });
    response.end("M\xE9todo n\xE3o permitido");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authCompile
});
