import "./App.css";
import ImageGen from "./Components/Features/ImageGen/ImageGen";

import { Bar } from "./Components/Containers/Bar";
import { TextAI } from "./Components/Features/TextAI/TextAI";
import { OptionsBar } from "./Components/Containers/OptionsContainer";

function App() {
  return (
    <div className="App">
      <div className="Outer-container">
        <Bar />
        <div className="Main-container">
          <div className="Content">
            <ImageGen />
            <TextAI />
          </div>
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
