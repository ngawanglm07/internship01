import React from 'react'
// import Navs from './Navs'
// import { Outlet } from 'react-router-dom'



function AppTitle(props) {
  const { title = "Find your beer 🍻"
  , subtitle = "what kind of beer are you looking for we have everything"
} = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default AppTitle