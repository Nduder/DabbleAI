import { ApiChanger } from "../../utils/ChangeApi";
import { TextGenOptions } from "../Options/TextAIOptions";
import { TranslateWidget } from "../Translator/TranslationWidget";

export const SettingsContainer = () => {
  return (
    <div className="settings-container">
      <a className="feature-header">Settings</a>
      <div className="settings-sections">
        <section className="setting-option api-key-changer">
          {"Api Key "}
          <ApiChanger />
        </section>
        {/* <section className="setting-option translation">
          {"Translation"}
          <TranslateWidget />
        </section> */}
        <section className="setting-option text-options">
          {"Text Options "}
          <TextGenOptions />
        </section>
      </div>
    </div>
  );
};
