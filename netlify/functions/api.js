// Netlify serverless function untuk backend API
const express = require('express');
const serverless = require('serverless-http');

// Import server logic
const app = express();

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes dari server
// Note: Anda perlu mengadaptasi server/routes.ts untuk environment ini
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API berfungsi normal' });
});

// Handler untuk Netlify
const handler = serverless(app);

module.exports.handler = async (event, context) => {
  // Handle serverless context
  const result = await handler(event, context);
  return result;
};