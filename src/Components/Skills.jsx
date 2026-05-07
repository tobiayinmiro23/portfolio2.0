import { skillGroups } from '../Data'

const Skills = () => {
   
  return (
      <section id='skills' className="mt-1 px-[1rem] mb-[1.1rem]">
        <h2 className="text-2xl font-semibold  text-center "> Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {skillGroups.map(({ icon, title, items }) => (
            <div key={title} className="project-border rounded-2xl mb-[0.5rem] p-6 shadow-elegant">
              <div className="flex items-center gap-2 text-foreground">
                <img className="h-5 w-5 text-primary"  src={icon} alt="" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

  )
}

export default Skills