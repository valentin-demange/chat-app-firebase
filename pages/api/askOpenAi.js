import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: formatGilbertPrompt(req.body.chatGilbert),
    temperature: 0.9,
    max_tokens: 150,
    stop: ["Human:", "Gilbert:"],
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    best_of: 1,
    });
  // console.log({completion})
  res.status(200).json({ result: completion.data.choices[0].text });
}

const formatGilbertPrompt = (chatGilbert) => {
  const intro = `The following is a conversation between a human and Gilbert. 
  Gilbert is helpful, creative, clever, and very friendly. 
  Gilbert try to convince people to hire Valentin as a front-end developer for a tech company. 
  Valentin is passionate about functional programming and web technologies in general, he loves React and Next js.\n
  \n`;

  const body = chatGilbert
    .map((msg) => {
      if (msg.author === "Gilbert") return "Gilbert:" + msg.text;
      else return "Human:" + msg.text;
    })
    .join("\n");
  const outro = "\nGilbert:";

  // debugger
  return intro + body + outro;
};
