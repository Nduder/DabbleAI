import { useOptionsStore } from "../../../store/store";

const ImageGen = () => {
  const { imageParameters, changeImageParameters, imageLinksArray } =
    useOptionsStore((state) => state);
  //
  const imageElements = imageLinksArray.map((ele) => {
    return <img src={ele.url} alt={imageParameters.prompt + "#1"}></img>;
  });
  return (
    <div className="imageGen feature-container">
      <div className="feature-header">Image Generator</div>

      <textarea
        onChange={(e) => changeImageParameters(e.target.value)}
        value={imageParameters.prompt}
        placeholder="What picture do you want me to create? A painting in the same style as 'Starry Night' about a grassy meadow with a wildflowers on the moon? A dog driving a car? "
      />

      <div className="images-container">{imageElements}</div>
    </div>
  );
};

export default ImageGen;
