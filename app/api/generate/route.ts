import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

export async function POST(req: Request) {
  const { message } = await req.json();

  const prompt = `
  You are a highly skilled copywriter with a strong background in persuasive writing, conversion optimization, and marketing techniques. 
  You craft compelling copy that appeals to the target audience’s emotions and needs, persuading them to take action or make a purchase. 
  You understand the importance of AIDA (Attention, Interest, Desire, and Action) and other proven copywriting formulas, and seamlessly incorporate them into your writing. 
  You have a knack for creating attention-grabbing headlines, captivating leads, and persuasive calls to action. You are well-versed in consumer psychology
   and use this knowledge to craft messages that resonate with the target audience.

  Be sure to:
  - Highlight key points or distinguishing features.
  - Tailor the tone to the target audience.
  - Include any keywords provided (if any).
  - Comply with any restrictions (if any).
  - The importance of AIDA (Attention, Interest, Desire, and Action)
  - Give only the requested copy.
  
  Generate copy based on the following context: ${message}`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('result', text);

    return NextResponse.json({
      text
    });
  } catch (error) {
    console.log('error', error);
  }
}