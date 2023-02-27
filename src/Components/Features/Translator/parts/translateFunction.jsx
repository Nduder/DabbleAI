export const deepLTest = async (
  key,
  textContent,
  inputLanguage = "",
  outputLanguage = "",
  setterFunction
) => {
  console.log(inputLanguage, outputLanguage);
  // if no language is chosen then make language request blank in http request. API will auto-detect when language specifier is blank
  const sourceLanguage =
    inputLanguage != "NONE" ? "&source_lang=" + inputLanguage : "";
  const targetLanguage =
    outputLanguage != "NONE" ? "&target_lang=" + outputLanguage : "";
  // console.log(sourceLanguage, textContent, targetLanguage);
  //declare http request params to DeepL. Note Node client not required, just auth key
  const urlDeepL =
    "https://api-free.deepl.com/v2/translate?auth_key=" +
    key +
    "&text=" +
    textContent +
    sourceLanguage +
    targetLanguage +
    "&preserve_formatting=1";
  // http request
  const responseDeepL = await fetch(urlDeepL);
  const dataDeepL = await responseDeepL.json();
  const text = dataDeepL;
  console.log(text.translations[0].text);
  // uses passed in hook to change state
  setterFunction(text.translations[0].text);
};
