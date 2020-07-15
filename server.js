const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));
// const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>
  res.json({
    msg: 'Welcome to the Caregiver Connect API ...'
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
