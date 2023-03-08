import { useOptionsStore } from "../../../store/store";

export const TextAI = () => {
  const { changeTextParameters, textParameters, textResponse } =
    useOptionsStore((state) => state);

  return (
    <div className="textGen feature-container">
      <div className="feature-header">Ask anything!</div>
      <textarea
        className="textGen textarea"
        onChange={(e) => changeTextParameters(e.target.value, "prompt")}
        placeholder="Ask me a question or give me a task! Ask me about travel suggestions, or to write poems about your favorite thing!"
        value={textParameters.prompt}
      />
      <div key="what">
        <p className="hx">{textResponse}</p>
      </div>
    </div>
  );
};
