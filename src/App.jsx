import "./App.css";
import ImageGen from "./Components/Features/ImageGen/ImageGen";
import { useState } from "react";
import { Bar } from "./Components/Containers/Bar";
import { TextAI } from "./Components/Features/TextAI/TextAI";

import { TranslateWidget } from "./Components/Features/Translator/TranslationWidget";
import { TextGenOptions } from "./Components/Features/Options/TextAIOptions.jsx";
import { NavBar } from "./Components/UtilityComponents/NavBar";
import { useFeatureSelect } from "./store/store";

function App() {
  const textAndImage = {
    textGen: <TextAI />,
    imageGen: <ImageGen />,
  };

  const currentFeature = useFeatureSelect((state) => state.currentFeature);
  const currentFeatureComponent = textAndImage[currentFeature];

  return (
    <div className="App">
      <div className="Outer-container">
        <Bar />

        <TranslateWidget />
        <NavBar />
        <div className="Main-container">
          {currentFeatureComponent}
          <TextGenOptions />
        </div>
      </div>
    </div>
  );
}

export default App;
