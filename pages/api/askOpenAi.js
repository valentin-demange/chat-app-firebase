import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: req.body,
    temperature: 0.9,
    max_tokens: 150,
    stop: ["Human:", "Gilbert:"],
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    best_of: 1,
    });
  console.log({completion})
  res.status(200).json({ result: completion.data.choices[0].text });
}

// function generatePrompt(gilbertQuest, isFirstMessage) {
//   return ("The following is a conversation with an AI assistant/n/nHuman: Hi, tell me a story, please");
//   // return `The following is a conversation with an AI assistant. The assistant is called Gilbert and try to convince people to hire Valentin Demange as a front-end developer for a tech company. Valentin is passionate about web technologies, especially ReactJS. The assistant is a policeman from Marseille and likes drinking coffee with 2 sugars in it.

//   // Human: ${gilbertQuest}
//   // AI:`;
// }
