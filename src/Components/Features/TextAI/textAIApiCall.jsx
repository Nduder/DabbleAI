import { Configuration, OpenAIApi } from "openai";

export const openAiClient = (apiKey) => {
  //creates openAiClient
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  return new OpenAIApi(configuration);
};

export const sendPrompt = async (
  textParameters,
  connection,
  setterFunction
) => {
  // Sends request and gets response from OpenAi
  //input: 1. parameters for the request
  //       2. the openAi Client created in 'openAiClient'

  const response = await connection.createCompletion(textParameters);
  console.log(response.data.choices[0].text);
  setterFunction(response.data.choices[0].text);
};

export const generateResponse = (api, textparam, setAIResponse) => {
  const openai = openAiClient(api);
  sendPrompt(textparam, openai, setAIResponse);
};
