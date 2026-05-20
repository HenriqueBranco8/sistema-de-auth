"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegister = exports.usersController = void 0;
const verif_user_1 = require("../service/verif-user");
const register_1 = require("../service/register");
const usersController = async (request, response) => {
    //O content irá receber uma função que busca o e-mail adicionado no Db. Porém, como esse projeto está em estado de desenvolvimento, busca em um json (emails.json)
    const content = await (0, verif_user_1.verifEmail)('henriquebrancodasilvadias@gmail.com');
    response.writeHead(200, { 'content-type': "application/json; charset=utf-8" /* ContentType.jsonUTF8 */ });
    response.end(JSON.stringify(content));
};
exports.usersController = usersController;
const UserRegister = async (request, response) => {
    const content = await (0, register_1.registerUser)('sdtrliogjjerilore@gmail.com', 'sdada@!@#454507*-+');
    response.writeHead(200, { 'content-type': "application/json; charset=utf-8" /* ContentType.jsonUTF8 */ });
    response.end(JSON.stringify(content));
};
exports.UserRegister = UserRegister;
//# sourceMappingURL=auth-controller.js.map