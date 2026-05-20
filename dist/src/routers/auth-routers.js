"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCompile = void 0;
const authCompile = async (request, response) => {
    // Verifica se o método é POST
    if (request.method === "POST" /* HttpMethod.POST */) {
        let rawbBody = '';
        // Escuta os chunks de dados que chegam no corpo da requisição
        request.on('data', chunk => {
            rawbBody += chunk.toString(); // Converte buffer para string e concatena
        });
        // Quando a leitura do corpo termina
        request.on('end', () => {
            try {
                // Converte a string JSON para um objeto JavaScript
                const parsedBody = JSON.parse(rawbBody);
                console.log('Dados recebidos:', parsedBody);
                // Envia resposta de sucesso
                response.writeHead(200, { 'Content-Type': "application/json; charset=utf-8" /* ContentType.jsonUTF8 */ });
                response.end(JSON.stringify({
                    message: 'Dados recebidos com sucesso',
                    dadosRecebidos: parsedBody
                }));
            }
            catch (error) {
                response.writeHead(400, { 'Content-Type': "application/json; charset=utf-8" /* ContentType.jsonUTF8 */ });
                response.end(JSON.stringify({ error: 'Formato JSON inválido' }));
            }
        });
    }
    else {
        // Resposta para métodos não permitidos
        response.writeHead(405, { 'Content-Type': "text/plain" /* ContentType.text */ });
        response.end('Método não permitido');
    }
};
exports.authCompile = authCompile;
//# sourceMappingURL=auth-routers.js.map