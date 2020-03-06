const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const client_id = 'ac167ff8b0704dd69bc0a15fd502d7e3';
const secret = 'd1c1fe6aa8a74194b9b04dae085c9e4d';

app.use(bodyParser.json());

app.use((request, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, system'
  );
  next();
});

app.get('/login', (request, response) => {
  const { system } = request.headers;
  const scopes = 'user-read-private user-read-email';
  // response.writeHead(200, { 'Content-Type': 'text/plain' });
  let redirect_uri = '';
  if (system === 'angular') {
    redirect_uri = 'http://localhost:4200/authcallback';
  } else {
    redirect_uri = 'http://localhost:3000/authcallback';
  }
  response.send({
    data:
      'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' +
      client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(redirect_uri)
  });
  response.end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server Started and listening on port 8080');
});
