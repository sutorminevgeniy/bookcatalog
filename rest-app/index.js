// Запустите ваш веб-сервер, используя команду node rest-app, откройте http://localhost:3000

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// создаем сервер и подписываемся на событие "request"
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  // разделение запросов по типу
  if (req.method === 'GET') {
    res.statusCode = 200; // OK
    
    // разделение запросов по url
    switch(req.url) {
      case '/books':
        res.setHeader('Content-Type', 'application/json');
        res.end('{"books":"many books"}');
        break
      case '/':
        res.setHeader('Content-Type', 'text/html');
        res.end('Hello World');
        break
      default:
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
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(process);