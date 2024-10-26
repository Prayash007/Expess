const axios = require("axios");

module.exports = async function (req, res) {
    const { imageUrl } = req.payload; // Retrieve imageUrl from the request payload

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

        res.json({ prediction: response.data });
    } catch (error) {
        console.error("Error in Roboflow request:", error);
        res.status(500).json({ error: "Error making prediction" });
    }
};
