import React from 'react'
import './ThemeSwitcher.sass'

const ThemeSwitcher = ({theme, setTheme}) => {
    return (
        <div className={'ThemeSwitcher'}>
            <button onClick={() => setTheme('Dark')}>Тёмная</button>
            <button onClick={() => setTheme('Light')}>Светлая</button>
        </div>
    )
}
export default ThemeSwitcher
