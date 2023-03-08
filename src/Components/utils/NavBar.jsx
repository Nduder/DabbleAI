import { ImageIcon, SettingsIcon, TextGenIcon } from "../icons/NavBarIcons";
import { useFeatureSelect } from "../../store/store";
export const NavBar = () => {
  const { currentFeature, changeCurrentFeature } = useFeatureSelect(
    (state) => state
  );

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
      <SettingsIcon
        clickSelectThisFeature={changeCurrentFeature}
        currentFeature={currentFeature}
        featureName="settings"
      />
    </div>
  );
};
