import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useAPIStore } from "../../../store/api";
import { useOptionsStore } from "../../../store/api";

export const TextAI = () => {
  const [returnText, setReturnText] = useState("");
  const changeTextPrompt = useOptionsStore(
    (state) => state.changeTextParameters
  );

  const currentApiKey = useAPIStore((state) => state.apiKey);
  const configuration = new Configuration({
    apiKey: currentApiKey,
  });
  const openai = new OpenAIApi(configuration);
  const textParameters = useOptionsStore((state) => state.textParameters);
  console.log(textParameters.prompt);
  const SendPrompt = async () => {
    const response = await openai.createCompletion(textParameters);

    setReturnText(response.data.choices[0].text);
  };
  return (
    <div>
      <div>{returnText}</div>
      <input
        onChange={(e) => changeTextPrompt(e.target.value, "prompt")}
        placeholder="insert text here"
        value={textParameters.prompt}
      />
      <button onClick={(e) => SendPrompt()}>Generate Text</button>
    </div>
  );
};
