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
        content: "Halo, ini tes OpenAI SDK dengan OpenRouter.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();