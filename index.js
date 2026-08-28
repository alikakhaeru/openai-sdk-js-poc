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

const messages = [];

function askQuestion() {
  rl.question("Tanya: ", async (question) => {
    messages.push({
      role: "user",
      content: question,
    });

    const response = await client.chat.completions.create({
      model: "openrouter/free",
      messages: messages,
    });

    const answer = response.choices[0].message.content;

    messages.push({
      role: "assistant",
      content: answer,
    });

    console.log("Jawaban:", answer);
    console.log("Total tokens:", response.usage.total_tokens);

    askQuestion();
  });
}

askQuestion();