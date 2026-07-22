import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCgd0YZp-TED8TzPCWpCbpyFGQyLqoNICo" });

async function main() {
  const interaction = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: "what do you know about earth",
  });
  console.log(interaction.output_text);
}

main();