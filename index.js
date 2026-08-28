const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.CHATBOT_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function main() {
  const response = await client.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: "Jelaskan secara singkat apa itu JavaScript.",
      },
    ],
  });

  console.log("Jawaban:", response.choices[0].message.content);
  console.log("Usage:", response.usage);
}

main();