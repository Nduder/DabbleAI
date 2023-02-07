import { create } from "zustand";

export const useAPIStore = create((set) => ({
  apiKey: import.meta.env.VITE_Open_AI_Key,
  changeApiKey: (newKey) => set((state) => ({ apiKey: newKey })),
}));

export const useOptionsStore = create((set) => ({
  textParameters: {
    model: "text-davinci-003",
    prompt: "",
    max_tokens: 50,
    temperature: 0,
    top_p: 1,
    n: 1,
    stream: false,
    logprobs: null,
    stop: ["input:"],
  },
  changeTextParameters: (target, key) =>
    set((state) => ({
      textParameters: { ...state.textParameters, [key]: target },
      //  the api isn't going to convert strings to numbers for you so make sure to that params like 'max_token" are fed number types (or convert it to number)
    })),
}));
