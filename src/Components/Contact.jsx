import React from 'react'
import { contacts } from '../Data';

const Contact = () => {
  return (
      <aside id='contact' className="lg:col-span-2 space-y-3 w-[60%] mx-[auto] pb-[4rem] max-[508px]:w-[97%]">
        <h1 className="text-center text-2xl font-semibold mb-9">Contact</h1>
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            target='_blank'
            className="project-border rounded-2xl p-5 shadow-elegant flex items-center gap-3 hover:border-primary/50 transition-colors max-[308px]:p-3"
          >
            <span className="rounded-lg bg-primary/15 p-2 text-primary">
              <img src={Icon} className="h-5 w-5" />
            </span>

            <div>
              <div className="text-sm text-muted-foreground">
                {item.label}
              </div>
              <div className="font-medium">{item.value}</div>
            </div>
          </a>
        );
      })}
    </aside>
    
  )
}

export default Contact