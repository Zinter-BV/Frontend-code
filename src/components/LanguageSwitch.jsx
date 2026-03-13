import React from "react";
import "./LanguageSwitcher.css";

const LanguageSwitcher = ({ language, setLanguage })  => {
    return (
        <div className="lang-switcher">
            <div
                className={`lang-option ${language === "EN" ? "active" : ""}`}
                onClick={() => setLanguage("EN")}
            >
                <img src="/flags/en.png" alt="English" />
                <span>EN</span>
            </div>

            <div
                className={`lang-option ${language === "NL" ? "active" : ""}`}
                onClick={() => setLanguage("NL")}
            >
                <img src="/flags/nl.png" alt="Netherlands" />
                <span>NL</span>
            </div>
        </div>
    );
}

export default LanguageSwitcher