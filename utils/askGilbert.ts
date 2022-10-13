import {message} from "./firebase"

export default async function askGilbert(chatGilbert: message[]) {
  const response = await fetch("/api/askOpenAi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({chatGilbert: chatGilbert}),
  });
  const data = await response.json();
  return data.result;
}

