const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  let result;

  switch (pathname) {
    case '/add':
      result = x + y;
      break;
    case '/subtract':
      result = x - y;
      break;
    case '/multiply':
      result = x * y;
      break;
    case '/divide':
      result = y !== 0 ? x / y : 'Cannot divide by zero';
      break;
    default:
      result = 'Unknown operation';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Result: ${result}`);
});

server.listen(3000, () => {
  console.log('Calculator microserver running at http://localhost:3000');
});
