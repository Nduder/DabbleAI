// Since requests are directly to the APIs, just gotta make sure keys can't be read straight up from cookies.

export const ductTapeEncode = (key) => {
  const secretKey = key.slice(5) + key.slice(0, 5) + key.slice(5).length;
  return secretKey;
};
export const ductTapeDecode = (encodedKey) => {
  const subKeyLength = encodedKey.slice(-1);
  const reversedKey = encodedKey.slice(0, -1);
  return (
    reversedKey.slice(reversedKey.length - 6) +
    reversedKey.slice(0, reversedKey.length + 1 - subKeyLength)
  );
};
