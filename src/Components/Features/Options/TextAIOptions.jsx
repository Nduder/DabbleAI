import { RangeInput } from "./OptionInputs/RangeInput";

export const TextGenOptions = () => {
  return (
    <div className="text-gen-options">
      <RangeInput
        optionLabel="Length"
        settingLabel={"max_tokens"}
        steps="1"
        max="3"
      />
      <RangeInput
        optionLabel="Variability"
        settingLabel={"temperature"}
        steps="25"
        max="100"
      />
    </div>
  );
};
