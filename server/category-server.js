const express = require('express')
const next = require('next')

const PORT = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express();

  server.get('https://jcrew-take-home-assignment.herokuapp.com/category-server', function (req, res) {
    res.json(require('./category'))
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  if (process.env.NODE_ENV === 'production') {
    server.use(express.static('.next/'));

    // handle GET request to /service-worker.js
    // if (pathname === '/service-worker.js') {
    //   const filePath = join(__dirname, '.next', pathname);

    //   app.serveStatic(req, res, filePath);
    // } else {
    //   handle(req, res, parsedUrl);
    // }

    server.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '.next/', 'index.html'));
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(
        `> Ready and listening on PORT:${PORT} in the ${process.env.NODE_ENV} environment`
      );
    });
  } else {
    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready and listening on http://localhost:${PORT}`);
    });
  }


