export const deepLTest = async (
  changeStateHook,
  key,
  inputLang = "",
  textContent,
  outputLang = ""
) => {
  console.log("hit?");
  const sourceLanguage = inputLang ? "&source_lang=" + inputLang : "";
  const targetLanguage = outputLang ? "&target_lang=" + outputLang : "";
  console.log(sourceLanguage, textContent, targetLanguage);
  const urlDeepL =
    "https://api-free.deepl.com/v2/translate?auth_key=" +
    key +
    "&text=" +
    textContent +
    sourceLanguage +
    targetLanguage +
    "&preserve_formatting=1";

  const responseDeepL = await fetch(urlDeepL);
  const dataDeepL = await responseDeepL.json();
  const text = dataDeepL;
  console.log(text.translations[0].text);
  changeStateHook(text.translations[0].text);
};
