import { Configuration, OpenAIApi } from "openai";

// "openAiClient" - sets up openAi client
//input: apiKey -  string
//output: openAiClient object
export const openAiClient = (apiKey) => {
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  return new OpenAIApi(configuration);
};

// "sendPrompt" - Sends request and gets response from OpenAi API
//input: 1. feature name - string
//       2. parameters for the API request
//       3. the openAi Client created in the 'openAiClient' function
//       4. the setter function
//       5. error message setter function
const sendPrompt = async (
  feature,
  requestParams,
  connection,
  setterFunction,
  setError,
  setErrorFlag,
  setApiCallFlag
) => {
  if (feature === "text") {
    try {
      const response = await connection.createCompletion(requestParams);
      setterFunction(response.data.choices[0].text.trimStart());
      // needs to trim otherwise newline spacing gets all messed up
      setErrorFlag(false);
      setApiCallFlag(false);
    } catch (error) {
      errorStateHandler(error, setError, setErrorFlag);
    }
  } else if (feature === "image") {
    try {
      const response = await connection.createImage(requestParams);
      setterFunction(response.data.data);
      setApiCallFlag(false);
      setErrorFlag(false);
    } catch (error) {
      errorStateHandler(error, setError, setErrorFlag);
    }
  }
};

const errorStateHandler = (error, setErrorCallback, setErrorFlagCallback) => {
  if (error.response) {
    // api-related errors
    console.log(error.response.status);
    console.log(error.response.data.error);
    setErrorCallback(error.response.data.error);
    setErrorFlagCallback(true);
  } else {
    // for client side errors e.g. no connection
    console.log({ error });
    setErrorCallback({ message: error.message });
    setErrorFlagCallback(true);
  }
};

export const generateResponse = (
  feature,
  apiKey,
  imageParameters,
  setterFunction,
  setError,
  setErrorFlag,
  setApiCallFlag
) => {
  const openai = openAiClient(apiKey);
  sendPrompt(
    feature,
    imageParameters,
    openai,
    setterFunction,
    setError,
    setErrorFlag,
    setApiCallFlag
  );
};
