import express from "express";
import dotenv from "dotenv";
import ollama from "ollama";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const getResponse = async () => {
  const response = await ollama.chat({
    model: "phi3:mini",
    messages: [{ role: "user", content: "Why is the sky blue?" }],
  });
  return response.message.content;
};

app.get("/", async (req, res) => {
  try {
    const content = await getResponse();
    res.json({ message: content });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
