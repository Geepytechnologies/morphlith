import Cookies from "js-cookie";

export class CookieFunctions {
  static setCookie = (name: string, value: string, expires: number) => {
    Cookies.set(name, value, { expires: expires });
  };

  static readCookie = (name: string) => {
    const value = Cookies.get(name);
    return value;
  };

  static removeCookie = (name: string) => {
    Cookies.remove(name);
  };
}
