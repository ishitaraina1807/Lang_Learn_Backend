// index.js
const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');

// Available routes
app.use(cors());
app.use(express.json());

// Import and use the auth route
app.use("/api/auth", require("./routes/auth"));

// Import and use the questions route
app.use("/api/questions", require("./routes/questions"));

app.listen(port, () => {
  console.log(`Notebox-backend listening on port ${port}`);
});

// Connect to MongoDB
connectToMongo();
