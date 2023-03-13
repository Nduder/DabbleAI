import "./App.css";
import ImageGen from "./Components/Features/ImageGen/ImageGen";

import { TextAI } from "./Components/Features/TextAI/TextAI";

import { NavBar } from "./Components/utils/NavBar";
import { useFeatureSelect } from "./store/store";
import { SettingsContainer } from "./Components/Features/Settings/Settings";
import { ImageGenButton } from "./Components/Features/ImageGen/ImageGenButton";
import { TextGenButton } from "./Components/Features/TextAI/TextAIButton";
import { ErrorDisplay } from "./Components/utils/ErrorDisplay";
import { ApiChanger } from "./Components/utils/ChangeApi";
import { useAPIStore } from "./store/store";
import { useEffect } from "react";
import { ductTapeDecode } from "./Components/utils/ductTapeEncoding";

function App() {
  const featureArray = {
    textGen: [<TextAI />, <TextGenButton />],
    imageGen: [<ImageGen />, <ImageGenButton />],
    settings: [<SettingsContainer />],
  };

  const { apiKey, changeApiKey } = useAPIStore((state) => state);
  const currentFeature = useFeatureSelect((state) => state.currentFeature);
  const [currentFeatureComponent, currentFeatureButton] =
    featureArray[currentFeature];
  const apiKeyNeeded = apiKey ? null : <ApiChanger />;

  useEffect(() => {
    if (apiKey === undefined)
      changeApiKey(
        ductTapeDecode(
          document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("secritPlays="))
            .split("=")[1]
        ),
        "apiKey"
      );
  }, []);

  return (
    <div className="App">
      <ErrorDisplay />
      {apiKeyNeeded}
      <div className="outer-container">
        <NavBar />
        <div className="main-container">{currentFeatureComponent}</div>
      </div>
      {currentFeatureButton}
    </div>
  );
}

export default App;
