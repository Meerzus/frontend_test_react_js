import React from 'react'
import './LanguageSwitcher.sass'

const LanguageSwitcher = ({lang, changeLanguage}) => {
    return (
        <div className={'LanguageSwitcher'}>
            <button onClick={() => changeLanguage('Русский')}>Русский</button>
            <button onClick={() => changeLanguage('Анлийский')}>Анлийский</button>
            <button onClick={() => changeLanguage('Итальянский')}>Итальянский</button>
        </div>
    )
}
export default LanguageSwitcher
