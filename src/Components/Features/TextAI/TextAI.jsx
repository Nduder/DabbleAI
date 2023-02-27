import { useState, useEffect } from "react";

import { useAPIStore } from "../../../store/store";
import { useOptionsStore } from "../../../store/store";
import { generateResponse, openAiClient, sendPrompt } from "./textAIApiCall";

export const TextAI = () => {
  const [returnText, setReturnText] = useState("");
  const changeTextPrompt = useOptionsStore(
    (state) => state.changeTextParameters
  );

  const currentApiKey = useAPIStore((state) => state.apiKey);

  const textParameters = useOptionsStore((state) => state.textParameters);

  return (
    <div className="Container">
      <textarea
        onChange={(e) => changeTextPrompt(e.target.value, "prompt")}
        placeholder="insert text here"
        value={textParameters.prompt}
      />
      <div>{returnText}</div>

      <button
        onClick={(e) =>
          generateResponse(currentApiKey, textParameters, setReturnText)
        }
      >
        Generate Text
      </button>
    </div>
  );
};
