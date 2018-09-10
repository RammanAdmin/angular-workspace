// generated by @ng-toolkit/serverless
const awsServerlessExpress = require('aws-serverless-express');
//@STEP-1 add path to builded server-file
const server = require('../../dist/connect-built-in-site-server.js');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'image/jpeg',
  'image/png',
  'image/gif',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'image/x-icon',
  'image/svg+xml',
  'application/x-font-ttf'
];

server.app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(server.app, null, binaryMimeTypes);
module.exports.universal = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);