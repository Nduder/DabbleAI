import { ImageIcon, TextGenIcon } from "../icons/NavBarIcons";
import { useFeatureSelect } from "../../store/store";
export const NavBar = () => {
  const { currentFeature, changeCurrentFeature } = useFeatureSelect(
    (state) => state
  );

  console.log(currentFeature);
  return (
    <div className="navbar">
      <TextGenIcon
        clickSelectThisFeature={changeCurrentFeature}
        currentFeature={currentFeature}
        featureName="textGen"
      />
      <ImageIcon
        clickSelectThisFeature={changeCurrentFeature}
        currentFeature={currentFeature}
        featureName="imageGen"
      />
    </div>
  );
};
