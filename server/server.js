const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const axios = require("axios"); // Make sure to install axios if you haven't already

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(
      "http://www.oref.org.il/WarningMessages/History/AlertsHistory.json"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Unable to fetch data from the API" });
  }
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
