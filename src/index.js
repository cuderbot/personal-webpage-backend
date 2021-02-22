const app = require('./server');
const ip = require('ip');

const { PORT, HOST } = process.env;
const host = HOST || ip.address();
const port = PORT || 3000;

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 APP running on http://${host}:${port}`);
});
