// import { apiStore } from "../Hooks/State/api";
import { useAPIStore } from "../../store/api";
import { useState } from "react";
export const ApiChanger = () => {
  let [apiInput, setApiInput] = useState("");

  const apiKey = useAPIStore((state) => state.apiKey);
  const increasePopulation = useAPIStore((state) => state.changeApiKey);

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
      <button onClick={() => increasePopulation(apiInput)}>Change Key</button>
    </div>
  );
};
