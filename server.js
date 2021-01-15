//import http from 'http';
const http = require('http');
// importuje plik apki
const app = require('./app');
// definicja numeru portu
const port = process.env.port || 3000;
//utworzenie serwera
const server = http.createServer(app);
//uruchomienie serwera
server.listen(port);