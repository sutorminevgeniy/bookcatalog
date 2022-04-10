// Запустите ваш веб-сервер, используя команду node rest-app, откройте http://localhost:3000

const http = require('http');

const { DataBase } = require('../db');

const hostname = '127.0.0.1';
const port = 3000;

// создаем сервер и подписываемся на событие "request"
const server = http.createServer(async (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  // разделение запросов по типу
  if (req.method === 'GET') {
    res.statusCode = 200; // OK
    
    // разделение запросов по url
    if (req.url === '/books') {
      res.setHeader('Content-Type', 'application/json');
      const allBooks = await DataBase.findAllBook(); 
      res.end(JSON.stringify(allBooks));
    }
    else if (req.url === '/authors') {
      res.setHeader('Content-Type', 'application/json');
      const allAuthors = await DataBase.findAllAuthor(); 
      res.end(JSON.stringify(allAuthors));
    }
    else if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.end('Hello World');
    }
    else {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello GET Default Request');
    }
  }
  else if (req.method === 'POST') {
    res.statusCode = 201; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello POST Default Request');
  }
  else if (req.method === 'PUT') {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello PUT Default Request');
  }
  else if (req.method === 'DELETE') {
    res.statusCode = 204; // NO CONTENT
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello DELETE Default Request');
  }
});

// запускаем сервер
server.listen(port, hostname, async () => {
  await DataBase.run();

  console.log(`Server running at http://${hostname}:${port}/`);
});

// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(process);