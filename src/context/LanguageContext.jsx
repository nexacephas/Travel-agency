import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS } from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("language") || "EN");

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const t = (path) => {
    if (!path) return "";
    const parts = path.split(".");
    let obj = TRANSLATIONS[lang] || {};
    for (const p of parts) {
      obj = obj?.[p];
      if (obj === undefined) return "";
    }
    return obj;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
