import OpenAI from "openai";

const openai = new OpenAI();

async function generateText(prompt) {
    try {
        const response = await openai.completions.create({
          model: "gpt-3.5-turbo",
          prompt: prompt,
          max_tokens: 150,
        });
    
        console.log(response.data.choices[0].text.trim());
      } catch (error) {
        console.error(error);
      }
}

generateText("Once upon a time");