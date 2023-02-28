import { create } from "zustand";

export const useAPIStore = create((set) => ({
  apiKey: import.meta.env.VITE_Open_AI_Key,
  deepAPIKey: import.meta.env.VITE_DEEP_L_Key,
  changeApiKey: (newKey, apiName) => set((state) => ({ [apiName]: newKey })),
}));

export const useOptionsStore = create((set) => ({
  textParameters: {
    model: "text-davinci-003",
    prompt: "",
    max_tokens: 60,
    temperature: 0,
    top_p: 1,
    n: 1,
    stream: false,
    logprobs: null,
    stop: ["input:"],
  },
  changeTextParameters: (paramValue, key = "prompt") =>
    set((state) => ({
      textParameters: { ...state.textParameters, [key]: paramValue },
      //  the api isn't going to convert strings to numbers for you so make sure to that params like 'max_token" are fed number types (or convert it to number)
    })),
}));

export const useTranslatorStore = create((set) => ({
  inputText: "", // text to be translated
  outputText: "", // translated text
  translateFlag: false,

  inputLanguage: "NONE", // EN, ZH, etc
  outputLanguage: "EN",
  changeLanguage: (languageId, inputLanguageOrOutputLanguage) =>
    set((state) => ({ [inputLanguageOrOutputLanguage]: languageId })),
  changeText: (text, inputTextOrOutputText) =>
    set((state) => ({ [inputTextOrOutputText]: text })),
}));

export const useFeatureSelect = create((set) => ({
  currentFeature: "textGen",
  changeCurrentFeature: (selectedFeature) => {
    set((state) => ({ currentFeature: selectedFeature }));
  },
}));
