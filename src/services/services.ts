const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
import prismaClient from "../prisma";
class CreateCustomerService{
  async execute(
  ){
    console.log("ROTA FOI CHAMADA")
    return {  }
  }
}
export {CreateCustomerService }

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAlcpWFeNa4MtghCv8yAnXow-cGt6lYEfM");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Analise a quantidade de água que foi gasta nesse hidrometro";

  const imageParts = [
    fileToGenerativePart("image.png", "image/png"),
   
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();