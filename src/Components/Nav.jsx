import React from 'react'
  const linkBase = "text-sm text-muted-foreground hover:text-foreground transition-colors text-foreground font-medium";

const Nav = () => {
  return (
     <header className="bg-[#090d16] sticky top-0 z-40 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <h1 to="/" className="font-bold tracking-tight text-lg text-gradient" >
          <span className="text-gradient">{"<dev/>"}</span>
        </h1>
        <nav className="flex items-center gap-6">
          <p to="/" className={linkBase} >Resume</p>
          <p to="/about" className={linkBase}>Skills</p>
          <p to="/projects" className={linkBase}>Projects</p>
          <p to="/contact" className={linkBase}>Contact</p>
        </nav>
      </div>
    </header>
  )
}

export default Nav