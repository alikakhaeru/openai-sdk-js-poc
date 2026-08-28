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

function ask() {
  rl.question("Tanya: ", async (question) => {
    messages.push({
      role: "user",
      content: question,
    });

    const response = await client.chat.completions.create({
      model: "openrouter/free",
      messages,
    });

    const answer = response.choices[0].message.content;

    console.log("Jawaban:", answer);

    messages.push({
      role: "assistant",
      content: answer,
    });

    ask();
  });
}

ask();