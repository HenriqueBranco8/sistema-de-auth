"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controller/auth-controller.ts
var auth_controller_exports = {};
__export(auth_controller_exports, {
  registerUser: () => registerUser,
  usersController: () => usersController
});
module.exports = __toCommonJS(auth_controller_exports);

// src/service/emails.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var pathData = import_path.default.join(__dirname, "../repositories/emails.json");
var emailUser = async () => {
  const rawData = import_fs.default.readFileSync(pathData, "utf-8" /* UTF8 */);
  const jsonFile = JSON.parse(rawData);
  return jsonFile;
};

// src/service/verif-user.ts
var verifEmail = async (userEmail) => {
  const email = await emailUser();
  const emailFound = email.find((emails) => emails.email === userEmail);
  if (emailFound !== void 0) {
    console.log("Email, encontado");
    return { email: emailFound.email };
  } else {
    console.log("E-mail, n\xE3o encontado.");
  }
};

// src/controller/auth-controller.ts
var usersController = async (request, response) => {
  const content = await verifEmail("GHB@gmail.com");
  response.writeHead(200, { "content-type": "application/json; charset=utf-8" /* jsonUTF8 */ });
  response.end(JSON.stringify(content));
};
var registerUser = async (request, response) => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerUser,
  usersController
});
