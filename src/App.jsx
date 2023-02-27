import "./App.css";
import ImageGen from "./Components/Features/ImageGen/ImageGen";
import { useState } from "react";
import { Bar } from "./Components/Containers/Bar";
import { TextAI } from "./Components/Features/TextAI/TextAI";
import { OptionsBar } from "./Components/Containers/OptionsContainer";
import { TranslateWidget } from "./Components/Features/Translator/TranslationWidget";

function App() {
  const [currentFeatureIdx, setCurrentFeatureIdx] = useState(0);
  const textAndImage = [<TextAI />, <ImageGen />];
  const currentFeature = textAndImage[currentFeatureIdx];

  const changeFeatureOnClick = () => {
    if (currentFeatureIdx >= textAndImage.length - 1) setCurrentFeatureIdx(0);
    else setCurrentFeatureIdx(currentFeatureIdx + 1);
  };
  return (
    <div className="App">
      <div className="Outer-container">
        <Bar />
        <button onClick={(e) => changeFeatureOnClick()}>Change feature</button>
        <TranslateWidget />
        <div className="Main-container">
          <div className="Content">{currentFeature}</div>
          <div className="Sidebar">
            Sidebar
            <OptionsBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
