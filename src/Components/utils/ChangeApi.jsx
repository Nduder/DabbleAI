import { useAPIStore } from "../../store/store";
import { useErrorStore } from "../../store/store";
import { useState } from "react";
import { ductTapeEncode } from "./ductTapeEncoding";

export const ApiChanger = () => {
  const { apiKey, changeApiKey } = useAPIStore((state) => state);
  const [apiInput, setApiInput] = useState(apiKey ? apiKey : "");
  const { setErrorFlag } = useErrorStore((state) => state); // for removing error message if changing api key

  const changeApiInput = (key) => {
    setApiInput(key);
  };

  return (
    <div>
      <div className="apiKey-container">
        <input
          onChange={(e) => changeApiInput(e.target.value)}
          value={apiInput}
          placeholder="Enter Api-key here"
          type="text"
        />
        <button
          className="apiKey settings button"
          onClick={() => {
            changeApiKey(apiInput, "apiKey");
            document.cookie = `secritPlays=${ductTapeEncode(apiInput)}`;
            setErrorFlag(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
