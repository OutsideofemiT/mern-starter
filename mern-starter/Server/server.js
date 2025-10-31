const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mernstarter';

// Connect to MongoDB and start server
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection error:', err));
