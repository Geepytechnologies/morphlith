import { create } from "zustand";
import CryptoJS from "crypto-js";
import { CookieFunctions } from "@/utils/cookie";

interface Appdetails {
  name: string;
  logo: string;
  slogan: string;
  subSlogan: string;
  address?: string;
  email?: string;
  phone?: string;
}

interface MyState {
  count: number;
}

const passphrase = "morphlithcookieconsent";

const encryptData = (data: any) => {
  const text = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(text, passphrase).toString();
  return encrypted;
};
const decryptData = (text: any) => {
  const decryptedBytes = CryptoJS.AES.decrypt(text, passphrase);
  const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
  const decryptedObject = JSON.parse(decryptedString);
  return decryptedObject;
};

const useStore = create<MyState>((set) => ({
  count: 0,
}));

export default useStore;
