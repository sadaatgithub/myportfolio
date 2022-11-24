import React from 'react'
import { Link } from "react-scroll";



const NavLinks = ({burgerMenu}) => {
const navLinks = ["home","about","projects","contact"]

const closeSubmenu = () =>{
  burgerMenu(false)
}

  return (
    <>
    {navLinks.map((link,index) =>{

    const animDelay = "anim-delay-" + 100 * index

        return (
        <Link 
            activeClass="btn-active"
            to={link}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeSubmenu}
            className={`uppercase mx-2 sm:text-gray-700 cursor-pointer  border-b-4 border-transparent hover:border-b-4 font-medium
            hover:border-teal-400 sm:hover:text-black animate-fadeIn transition-all ${animDelay} tracking-widest`}
        >{link}</Link>)
    })}
    </>
  )
}

export default NavLinks