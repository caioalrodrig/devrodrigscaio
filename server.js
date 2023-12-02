const httpServer = require('http-server');
const port = process.env.PORT || 8080; // Escolha a porta que desejar

const server = httpServer.createServer({
  cors: true,
});

server.listen(port, () => {
  console.log(`Servidor HTTP está rodando em http://localhost:${port}`);
});