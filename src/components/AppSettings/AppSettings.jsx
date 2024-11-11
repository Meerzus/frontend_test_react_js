import React from 'react'
import './AppSettings.sass'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

const AppSettings = ({theme, setTheme, lang, changeLanguage}) => {
    return (
        <div className={'appSettings'}>
            <p>Тема: {theme}</p>
            <ThemeSwitcher theme={theme} setTheme={setTheme}/>
            <p>Язык: {lang}</p>
            <LanguageSwitcher lang={lang} changeLanguage={changeLanguage}/>
        </div>
    )
}
export default AppSettings
