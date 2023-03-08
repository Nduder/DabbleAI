import { useAPIStore, useOptionsStore } from "../../../store/store";
// import { generateImage } from "./ImageGenApiCall";
import { useErrorStore } from "../../../store/store";
import { generateResponse } from "../../utils/openAiApiRequest";
import { useEffect } from "react";

export const ImageGenButton = () => {
  const { apiKey, apiCallFlag, setApiCallFlag } = useAPIStore((state) => state);
  const { setError, setErrorFlag, error } = useErrorStore((state) => state);
  const { imageParameters, setImageLinksArray } = useOptionsStore(
    (state) => state
  );
  useEffect(() => {
    setApiCallFlag(false);
  }, [error]);

  const buttonStatus = (() => {
    if (apiCallFlag) return "loading";
    else return imageParameters.prompt ? "ready" : null;
  })();

  const buttonText = apiCallFlag ? "Waiting" : "Go!";

  return (
    <button
      className={"api-submit button " + buttonStatus}
      onClick={() => {
        setApiCallFlag(true);
        generateResponse(
          "image",
          apiKey,
          imageParameters,
          setImageLinksArray,
          setError,
          setErrorFlag,
          setApiCallFlag
        );
      }}
      disabled={imageParameters.prompt ? false : true}
    >
      {buttonText}
    </button>
  );
};
