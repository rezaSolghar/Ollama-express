import express from "express";
import dotenv from "dotenv";
import ollama from "ollama";
import { MathSubject } from "./subjects.enum";
import { parseGeometryQuestion } from "./parse.methods";
import { RandomMathProblemCreator } from "./queryHolder";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const getResponse = async (subject: string) => {
  const response = await ollama.chat({
    model: "phi3:mini",
    messages: [
      {
        role: "user",
        content: RandomMathProblemCreator(subject),
      },
    ],
  });
  return response.message.content;
};

app.get("/RandomMathProblemCreator/", async (req, res) => {
  res.json({ "you need to choose on of this subjects :: ": MathSubject });
});

app.get("/RandomMathProblemCreator/:subject", async (req, res) => {
  try {
    const subject = req.params.subject;

    if (!Object.values(MathSubject).includes(subject)) {
      res.json({ message: "the subject provided is not a Math subject" });
    }

    const content = await getResponse(subject);
    const editedContent = parseGeometryQuestion(content);
    res.json({ message: editedContent });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
