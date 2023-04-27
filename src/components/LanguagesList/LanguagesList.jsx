import React from 'react';
import {languages} from "../../constants/GithubLanguagesList";

const LanguagesList = ({selectedLanguage, setSelectedLanguage, isLoading}) => {
    const setSelectedLanguageHandler = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li
                    key={index}
                    onClick={() => setSelectedLanguageHandler(language)}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000000',
                        pointerEvents: isLoading ? 'none' : 'auto'
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default LanguagesList;