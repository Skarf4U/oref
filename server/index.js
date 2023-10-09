// server.js
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 5000;

// Serve static files from the React app

app.use(cors());

const apiUrl = process.env.API_URL;
const newsApiUrl = process.env.IL_NEWS_API_URL;


app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Unable to fetch data from the API" });
  }
});
app.get("/news-api", async (req, res) => {
  try {
    const response = await axios.get(newsApiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Unable to fetch data from the API" });
  }
});
// Define API routes or other server routes here, if needed

// For all other requests, serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
