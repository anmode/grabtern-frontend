import CryptoJS from "crypto-js";

export const encryptData = (userData) => {
  console.log("encrypt this data ", userData);
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(userData),
    process.env.encryptionSecretKey,
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  if (!encryptedData) {
    return;
  }
  console.log("decrypt the data ", encryptedData);
  const decryptedBytes = CryptoJS.AES.decrypt(
    encryptedData,
    process.env.encryptionSecretKey,
  );
  const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedDataString;
};
