import React from "react";
import { useOptionsStore } from "../../../../store/api";

const settingName = {
  max_tokens: {
    60: "1-2 Sentences",
    120: "3-4 Sentences",
    250: "1 Paragraph",
    1000: "2+ Paragraphs",
  },
  temperature: {
    0: "Normal",
    0.25: "Normal-",
    0.5: "Varied",
    0.75: "More Varied",
    1: "Very Varied",
  },
};

export const RangeInput = ({ optionLabel, settingLabel, steps, max }) => {
  const parameter = useOptionsStore((state) => state.textParameters);
  const changeParameters = useOptionsStore(
    (state) => state.changeTextParameters
  );
  const inputToSettingsConverter = (value) => {
    if (settingLabel == "temperature") {
      changeParameters(parseInt(value) / 100, settingLabel);
    } else if (settingLabel == "max_tokens") {
      if (value == 0) changeParameters(60, settingLabel);
      else if (value == 1) changeParameters(120, settingLabel);
      else if (value == 2) changeParameters(250, settingLabel);
      else if (value == 3) changeParameters(1000, settingLabel);
    }
  };
  console.log(parameter.max_tokens);
  return (
    <React.Fragment>
      <label htmlFor="rangeParam">
        {optionLabel} : {settingName[settingLabel][parameter[settingLabel]]}
      </label>
      <input
        type="range"
        id="rangeParam"
        max={max}
        step={steps}
        onChange={(e) => inputToSettingsConverter(e.target.value)}
      />
    </React.Fragment>
  );
};
