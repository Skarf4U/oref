require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const axios = require("axios"); // Make sure to install axios if you haven't already

const apiUrl = process.env.API_URL;
console.log(apiUrl);

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

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
