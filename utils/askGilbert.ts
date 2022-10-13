import {message} from "./firebase"

export default async function askGilbert(chatGilbert: message[]) {
  const response = await fetch("/api/askOpenAi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formatGilbertPrompt(chatGilbert)),
  });
  const data = await response.json();
  return data.result;
}

const formatGilbertPrompt = (chatGilbert: message[]) => {
  const intro = `The following is a conversation between a human and Gilbert. 
  Gilbert is helpful, creative, clever, and very friendly. 
  Gilbert try to convince people to hire Valentin as a front-end developer for a tech company. 
  Valentin is passionate about functional programming and web technologies in general, he loves React and Next js.
  Valentin is looking for a company that have values such as XXX and XXX.\n
  \n`;

  const body = chatGilbert
    .map((msg: { author: string; text: string; }) => {
      if (msg.author === "Gilbert") return "Gilbert:" + msg.text;
      else return "Human:" + msg.text;
    })
    .join("\n");
  const outro = "\nGilbert:";

  // debugger
  return intro + body + outro;
};
