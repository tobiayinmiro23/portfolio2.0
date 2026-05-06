import React from 'react'
import { contacts } from '../Data';

const Contact = () => {
  return (
      <aside className="lg:col-span-2 space-y-3 w-[60%] mx-[auto]">
        <h1 className='text-center text-[1.5rem] mb-[3rem]'>Contact</h1>
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            className="glass rounded-2xl p-5 shadow-elegant flex items-center gap-3 hover:border-primary/50 transition-colors"
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