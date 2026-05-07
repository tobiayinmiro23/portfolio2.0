import {useState,useRef} from 'react'
import menuIcon from '../Assets/menu-svgrepo-com.svg'
const linkBase = "text-m text-muted-foreground hover:text-foreground cursor-pointer font-medium max-[795px]:my-[1.7rem]";
import {useState,useRef} from 'react'
import menuIcon from '../Assets/menu-svgrepo-com.svg'
const linkBase = "text-m text-muted-foreground hover:text-foreground cursor-pointer font-medium max-[795px]:my-[1.7rem]";

const Nav = () => {
  let menu = useRef(null)
    const Menu = () => {
        if (menu?.current) menu.current.classList.toggle('hamburgermenu')
    }
  let menu = useRef(null)
    const Menu = () => {
        if (menu?.current) menu.current.classList.toggle('hamburgermenu')
    }
  return (
     <header className="bg-[#090d16] sticky top-0 z-40 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <h1  className="font-bold tracking-tight text-lg text-gradient" >
          <span className="text-gradient text-2xl">{"<Fullstack Dev/>"}</span>
        <h1  className="font-bold tracking-tight text-lg text-gradient" >
          <span className="text-gradient text-2xl">{"<Fullstack Dev/>"}</span>
        </h1>
        <nav ref={menu} className="flex items-center gap-11 max-[795px]:absolute max-[795px]:bg-[black] max-[795px]:transition-all-[1s] max-[795px]:top-[4.06rem] max-[795px]:w-[100%] max-[795px]:h-[100%] max-[795px]:overflow-y-auto max-[795px]:p-[0rem] max-[795px]:pb-[3rem] max-[795px]:block max-[795px]:text-center max-[795px]:z-30 max-[795px]:left-[-100.1%]">
          <p className={linkBase}><a href="portfoliopic/Ayinmiro Tobi CV.pdf" target='_blank' className={linkBase} >Resume</a></p>
          <p className={linkBase}><a href="#skills" >Skills</a></p>
          <p className={linkBase}><a href="#projects" >Projects</a></p>
          <p className={linkBase}><a href="#contact" >Contact</a></p>
        </nav>
        <img src={menuIcon} className="h-7 w-7 hidden max-[795px]:block" onClick={Menu}/>
        {/* <div className='' onClick={Menu} >hidden</div> */}
        <img src={menuIcon} className="h-7 w-7 hidden max-[795px]:block" onClick={Menu}/>
        {/* <div className='' onClick={Menu} >hidden</div> */}
      </div>
    </header>
  )
}

export default Nav