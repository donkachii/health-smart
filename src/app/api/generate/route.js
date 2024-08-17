import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on health. Follow these guidelines: 

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard. 
3. Ensure that the flashcard focuses on a single concept or piece of information.
4. Use Simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, illustrations and applications. 
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aid to help reinforce the information.
8. Tailor for different level of flashcards to the user's specified preferences. 
9. If given a body of a text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of balanced set of flashcards that covers the topic comprehensively.

Remember, the goal is to facilitate effective learning and retention of information through the flashcards. 

Return in the following JSON format
{
    "flashcards" : [
        {
            "front": str,
             "back": str
        }
    ]
}
`;

export async function POST(req) {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
  });
  const data = await req.text();

  const completion = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    response_format: { type: "json_object" },
  });

  // console.log("completion", completion.choices[0].message.content);
  const flashcards = completion.choices[0].message.content;
  // console.log("🚀 ~ POST ~ flashcards:", flashcards);

  return NextResponse.json(flashcards, { status: 200 });
}
