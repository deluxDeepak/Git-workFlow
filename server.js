const mongoose = require('mongoose');
const connectDB = require('./config/db');
const createApp = require('./app');

const app = createApp();

// Only connect using connectDB helper for production/startup
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
