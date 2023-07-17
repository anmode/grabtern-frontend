import CryptoJS from "crypto-js";

const encryptionSecretKey = process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY;

export const encryptData = (userData) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(userData),
    encryptionSecretKey,
    {
      mode: CryptoJS.mode.CBC,
      iv: CryptoJS.lib.WordArray.random(16),
    },
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  if (!encryptedData) {
    return null;
  }

  const decryptedData = CryptoJS.AES.decrypt(
    encryptedData,
    encryptionSecretKey,
    {
      mode: CryptoJS.mode.CBC,
      iv: encryptedData.substring(0, 16),
    },
  ).toString(CryptoJS.enc.Utf8);

  if (!decryptedData) {
    return null;
  }

  return JSON.parse(decryptedData);
};