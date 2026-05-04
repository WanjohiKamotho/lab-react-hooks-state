import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  const handleClick = ()=>{
    setDarkMode(!darkMode)
  }

  let buttonLabel;
  if(darkMode){
    buttonLabel = "Toggle Light Mode"
  } else{
    buttonLabel = "Toggle Dark Mode"
  }
  return (
    <button onClick={handleClick}>{buttonLabel}</button>
  )
}

export default DarkModeToggle
