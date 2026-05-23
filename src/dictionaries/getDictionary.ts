const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  km: () => import("./km.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "km") => {
  return dictionaries[locale]();
};
