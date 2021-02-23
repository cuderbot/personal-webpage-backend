/* eslint-disable no-console */
const { app } = require('./server');
const { bootstrapLoader } = require('./loaders');
const config = require('./config');

async function bootstrap() {
  await bootstrapLoader();

  const { host, port } = config.server;

  app
    .listen(port, host, () => {
      console.log(`🚀 APP running on http://${host}:${port}`);
    })
    .on('close', () => {
      console.log(`👋 succesfully closing app`);
    })
    .on('error', (err) => {
      console.error(`❌ error has occurred :(`);
      console.error(config.env === 'development' ? err.stack : '🥞');
      process.exit(1);
    });
}

bootstrap();
