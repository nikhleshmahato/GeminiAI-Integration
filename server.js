import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "yourAPIkey" });

async function main() {
  const interaction = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: "you can write your custom prompt here",
  });
  console.log(interaction.output_text);
}

main();
