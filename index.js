require("dotenv").config();

const OpenAI = require("openai");
const readline = require("readline");

const client = new OpenAI({
  apiKey: process.env.CHATBOT_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Tanya: ", async (question) => {
  const response = await client.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });

  console.log("Jawaban:", response.choices[0].message.content);
  console.log("Usage:", response.usage);

  rl.close();
});