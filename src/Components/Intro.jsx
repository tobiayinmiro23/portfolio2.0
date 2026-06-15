import React from 'react'
import { stack, experienceSummary} from '../Data';

const Intro = () => {
  
   return (
    <main className="relative overflow-hidden ">
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" />

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20 text-center">
        <div className="inline-flex items-center bg-card/60  rounded-full border px-4 py-1.5 text-xs  mb-8 max-[344px]:text-[0.68rem] max-[344px]:px-2">
          Available for freelance, contract & full-time roles
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
          Full Stack Developer<br />
          crafting <span className="text-gradient">modern web</span> experiences
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hi my name is Ayinmiro Tobi, i build secure, scalable, and beautifully designed website and web apps
          from pixel-perfect interfaces to robust backends and APIs.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button  size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow py-[0.5rem] px-[0.8rem] rounded-[0.3rem] hover:opacity-90">
            <a href="/portfoliopic/Ayinmiro_Tobi.pdf" target='_blank'>View Resume </a>
          </button>
          <button variant="outline" className='bg-[white] text-[black] py-[0.5rem] px-[0.8rem] rounded-[0.3rem] ' size="lg">
            <a href="#contact">Get in touch</a>
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-13">
        <div className="grid sm:grid-cols-3 gap-4">
          {experienceSummary.map((s) => (
            <div key={s.v} className="project-border rounded-2xl p-6 text-center shadow-elegant">
              <div className="text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Intro


