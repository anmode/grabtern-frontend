import CryptoJS from "crypto-js";

const encryptionSecretKey = process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY;

export const encryptData = (userData) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(userData),
    encryptionSecretKey,
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  if (!encryptedData) {
    return null;
  }
  try {
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedData,
      encryptionSecretKey,
    );
    const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedDataString) {
      console.error("Decrypted data is empty");
      return null;
    }
    const decryptedData = JSON.parse(decryptedDataString);
    return decryptedData;
  } catch (error) {
    console.error("Error decrypting or parsing data: ", error);
    return null;
  }
};
