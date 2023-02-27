// import { apiStore } from "../Hooks/State/api";
import { useAPIStore } from "../../store/store";
import { useState } from "react";

export const ApiChanger = () => {
  let [apiInput, setApiInput] = useState("");

  const { apiKey, changeApiKey } = useAPIStore((state) => state);

  const changeApiInput = (key) => {
    setApiInput(key);
  };

  return (
    <div className="Navbar">
      <input
        onChange={(e) => changeApiInput(e.target.value)}
        value={apiInput}
        placeholder={apiKey}
      />
      <button onClick={() => changeApiKey(apiInput, "apiKey")}>
        Change Key
      </button>
    </div>
  );
};
