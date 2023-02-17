/* const http = require('http');
const fs = require('fs');

const videos = [
  { id: 1, title: 'Video 1' },
  { id: 2, title: 'Video 2' },
  { id: 3, title: 'Video 3' },
  { id: 4, title: 'Video 4' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/public/videos') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(videos));
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync('./index.html', 'utf-8'));
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
 */