import { useAPIStore, useOptionsStore } from "../../../store/store";
// import { generateResponse } from "./TextGenApi";
import { useErrorStore } from "../../../store/store";
import { generateResponse } from "../../utils/openAiApiRequest";
import { useEffect } from "react";

export const TextGenButton = () => {
  const { apiKey, apiCallFlag, setApiCallFlag } = useAPIStore((state) => state);
  const { setError, setErrorFlag, error } = useErrorStore((state) => state);
  const { textParameters, textResponse, setTextResponse } = useOptionsStore(
    (state) => state
  );
  useEffect(() => {
    setApiCallFlag(false);
  }, [error]);

  const buttonStatus = (() => {
    if (apiCallFlag) return "loading";
    else return textParameters.prompt ? "ready" : null;
  })();

  const buttonText = apiCallFlag ? "Waiting" : "Go!";

  return (
    <button
      className={"api-submit button " + buttonStatus}
      onClick={() => {
        setApiCallFlag(true);
        generateResponse(
          "text",
          apiKey,
          textParameters,
          setTextResponse,
          setError,
          setErrorFlag,
          setApiCallFlag
        );
      }}
      disabled={textParameters.prompt ? false : true}
    >
      {buttonText}
    </button>
  );
};
