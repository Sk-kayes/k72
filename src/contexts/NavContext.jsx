import React, { createContext, useState } from 'react'

const NavContext = ({children}) => {
    const NavBarContext = createContext();
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
        <NavBarContext.Provider value={[isNavOpen, setIsNavOpen]}>
      {children}
        </NavBarContext.Provider>
    </div>
  )
}

export default NavContext