export const SelectLanguage = ({ languageObject, inOrOut, setLanguage }) => {
  const inputList = Object.keys(languageObject).map((ele, idx) => {
    return (
      <option key={idx} value={ele}>
        {languageObject[ele]}
      </option>
    );
  });
  return (
    <select onChange={(e) => setLanguage(e.target.value, inOrOut)}>
      {inputList}
    </select>
  );
};
