import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useAPIStore } from "../../../store/store";

const ImageGen = () => {
  const [textPrompt, setPrompt] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const currentApiKey = useAPIStore((state) => state.apiKey);
  const configuration = new Configuration({
    apiKey: currentApiKey,
  });
  const openai = new OpenAIApi(configuration);
  //
  const generateImage = async (event, prompt) => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImageArray(response.data.data);
  };
  //
  const imageElements = imageArray.map((ele) => {
    return <img src={ele.url} alt="Italian Trulli"></img>;
  });

  return (
    <div className="Image-gen Container">
      <div className="Feature-Header">Image Generator</div>
      <div>
        <input onChange={(e) => setPrompt(e.target.value)} value={textPrompt} />
        <button onClick={(e) => generateImage(e, textPrompt)}>
          Generate Picture
        </button>
      </div>
      <div className="Image-Container">{imageElements}</div>
    </div>
  );
};

export default ImageGen;
