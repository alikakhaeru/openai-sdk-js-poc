const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "Halo, ini tes API.",
  });

  console.log(response.output_text);
}

main();