import React, { useContext } from 'react'
import ThemeToggler from './MainThemeComp'
import ThemeContext from '../ThemeContext'

function Header() {
    const [isdark,] =useContext(ThemeContext)
  return (
    <div>
        {console.log(isdark ,'i') }
        <ThemeToggler />
    </div>
  )
}

export default Header