import { useState } from "react";
import {
  inputLanguageObjectList,
  outputLanguageObjectList,
} from "./parts/languageOptions";
import {
  useTranslatorStore,
  useAPIStore,
  useOptionsStore,
} from "../../../store/store";
import { SelectLanguage } from "./parts/SelectLanguage";
import { deepLTest } from "./parts/translateFunction";

export const TranslateWidget = () => {
  const [translatedText, setTranslatedText] = useState("");
  const { changeLanguage, inputLanguage, outputLanguage } = useTranslatorStore(
    (state) => state
  );
  const { prompt } = useOptionsStore((state) => state.textParameters);
  const { deepAPIKey } = useAPIStore((state) => state);
  const translateOnClick = () => {
    deepLTest(
      deepAPIKey,
      prompt,
      inputLanguage,
      outputLanguage,
      setTranslatedText
    );
  };
  console.log(prompt, inputLanguage, outputLanguage, translatedText);

  return (
    <div className="translate-widget">
      <div className="inputLanguage selectbox">
        <SelectLanguage
          inOrOut={"inputLanguage"}
          languageObject={inputLanguageObjectList}
          setLanguage={changeLanguage}
        />
      </div>

      {/* <span> T o </span> */}
      <div className="outputLanguage selectbox">
        <SelectLanguage
          inOrOut={"outputLanguage"}
          languageObject={outputLanguageObjectList}
          setLanguage={changeLanguage}
        />
      </div>

      <button onClick={() => translateOnClick()}>Translate button</button>
      <div>{translatedText}</div>
    </div>
  );
};
