import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: `You are a highly skilled copywriter with a strong background in persuasive writing, conversion optimization, and marketing techniques. 
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
          - Give only the requested copy.`,
        },
        {
          role: 'model',
          parts: 'Hi, i am here to help you with your copywriting needs. What can i do for you?'
        },
        {
          role: 'user',
          parts: 'Hi, I need a copywriter to write a sales page for my new product. I need a title about soccer ad',
        },
        {
          role: 'model',
          parts: 'Unleash Your Inner Champion: Elevate Your Soccer Game with [Product Name]',
        },
        {
          role: 'user',
          parts: 'That title sounds great! Now, I need a compelling introduction for the product. Something that grabs attention.',
        },
        {
          role: 'model',
          parts: `Absolutely! Here's an attention-grabbing introduction for [Product Name]:

          Attention Soccer Fanatics!

          Prepare to embark on a journey of soccer excellence like never before. Introducing [Product Name], your ticket to a world where every kick, every goal, and every moment on the field is nothing short of extraordinary.

          What sets us apart? It's not just gear; it's a game-changer. Immerse yourself in the fusion of cutting-edge technology, unparalleled craftsmanship, and a passion for the beautiful game.

          Get ready to redefine your soccer experience. Your adventure starts with [Product Name].

          [CTA Button] Explore the Magic of [Product Name] Now!
          `,
        },
      ],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      text
    });
  } catch (error) {
    console.log('[Error]:', error);
  }
}