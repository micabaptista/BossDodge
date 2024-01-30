'use client';

import {useEffect, useState} from "react";
import OpenAI from "openai";


const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

async function generateTextFromOpenAI(): Promise<any> {
  return openai.chat.completions.create({
    messages: [
      {
        "role": "system",
        "content": `${process.env.NEXT_PUBLIC_OPENAI_PROMPT}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
}

const useGenerateText = () => {

  const [text, setText] = useState<string>('');

  useEffect(() => {
    updateText();
  }, []);

  const updateText = () => {
    generateTextFromOpenAI().then((res) => {
      setText(res?.choices[0]?.message.content);
    });
  }

  return {text, updateText}
}

export default useGenerateText;
