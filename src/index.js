const app = require('./server');

const { PORT, HOST } = process.env;

app.listen(PORT, HOST, () => {
  console.log(`🚀 APP running on http://${HOST}:${PORT}`);
});
