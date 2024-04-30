import "server-only";

interface Dictionary {
  [key: string]: () => Promise<any>;
}

const dictionaries: Dictionary = {
  "en-US": () => import("./en.json").then((module) => module.default),
  "tr-TR": () => import("./tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale]();
};
