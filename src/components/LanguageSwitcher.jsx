import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "nl", name: "NL", flag: "🇳🇱" },
  // { code: "es", name: "ES", flag: "🇪🇸" },
  // { code: "fr", name: "FR", flag: "🇫🇷" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select
      className="outline-none mr-3 cursor-pointer"
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
