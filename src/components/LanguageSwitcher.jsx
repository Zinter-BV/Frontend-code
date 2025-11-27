// import React from "react";
// import { useTranslation } from "react-i18next";
// import nl from '../Assets/nl.png'
// import gb from '../Assets/gb.png'

// const languages = [
//   { code: "nl", name: "NL", flag: "🇳🇱" },
//   { code: "en", name: "EN", flag: "🇬🇧" },
//   // { code: "es", name: "ES", flag: "🇪🇸" },
//   // { code: "fr", name: "FR", flag: "🇫🇷" },
// ];

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   return (
//     <select
//       className="outline-none mr-3 cursor-pointer"
//       value={i18n.language}
//       onChange={(e) => i18n.changeLanguage(e.target.value)}
//     >
//       {languages.map((lang) => (
//         <option key={lang.code} value={lang.code}>
//           {lang.flag} {lang.name}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default LanguageSwitcher;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import nlFlag from "../Assets/nl.png";
import gbFlag from "../Assets/gb.png";

const languages = [
  { code: "nl", name: "NL", flag: nlFlag },
  { code: "en", name: "EN", flag: gbFlag },
  // { code: "es", name: "ES", flag: "🇪🇸" },
  //   // { code: "fr", name: "FR", flag: "🇫🇷" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="mr-1">
      {/* Current language button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2  p-1 rounded cursor-pointer"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="w-3 h-3"
        />
        <span>{currentLanguage.name}</span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className="flex items-center gap-1 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={lang.flag} alt={lang.name} className="w-3 h-3" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
