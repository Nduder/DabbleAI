import { RangeInput } from "./OptionInputs/RangeInput";

export const TextGenOptions = () => {
  return (
    <div className="Text-Gen-Options">
      <RangeInput
        optionLabel="Length"
        settingLabel={"max_tokens"}
        steps="1"
        max="3"
      />
      <RangeInput
        optionLabel="Response Variability"
        settingLabel={"temperature"}
        steps="25"
        max="100"
      />
    </div>
  );
};

{
  /* <input
        placeholder="tokens"
        onChange={(e) =>
          changeTextPrompt(parseInt(e.target.value), "max_tokens")
        }
      /> */
}
// { model: "text-davinci-003",
// prompt: textPrompt,
// max_tokens: 20,
// temperature: 0,
// top_p: 1,
// n: 1,
// stream: false,
// logprobs: null,
// stop: ["input:"]}
