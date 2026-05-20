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

// src/service/register.ts
var register_exports = {};
__export(register_exports, {
  registerUser: () => registerUser
});
module.exports = __toCommonJS(register_exports);
var import_fs = __toESM(require("fs"));

// src/service/emails.ts
var import_path = __toESM(require("path"));
var pathData = import_path.default.join(__dirname, "../repositories/emails.json");

// src/service/register.ts
var registerUser = async (email, password) => {
  const rawData = import_fs.default.readFileSync(pathData, "utf-8" /* UTF8 */);
  const dataArray = JSON.parse(rawData);
  const user = { "email": email, "password": password };
  dataArray.push(user);
  const dataString = JSON.stringify(dataArray);
  const addUser = import_fs.default.writeFileSync(pathData, dataString, "utf-8" /* UTF8 */);
  console.log("E-mail cadastrado");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerUser
});
