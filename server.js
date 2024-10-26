const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
  const { imageUrl } = req.body;

  try {
    const response = await axios.post(
      "https://detect.roboflow.com/drug_detection_project/9",
      {
        api_key: "Ajvqkk4nNlEiT1PUvWWD",
        image: imageUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ prediction: response.data});
  } catch (error) {
    console.error("Error making prediction:", error);
    res.status(500).send("Error making prediction");
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});