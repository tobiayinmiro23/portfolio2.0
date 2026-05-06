
import { projects } from '../Data'
import arrow from  '../Assets/up-right-svgrepo-com.svg'


const Projects = () => {
  return (
        <main id="projects" className="px-4 py-6">
      <h1 className="text-center text-2xl font-semibold mb-4">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" w-[22rem] p-[0.7rem] m-4 glass rounded-[0.3rem] shadow-[0px_1px_24px_rgba(0,0,0,0.2)] pb-3 sm:w-[21rem] md:w-[20rem] lg:w-[23rem]"
          >
            <div className="w-full h-[17rem] rounded-[0.3rem]   sm:h-[17rem] md:h-[14rem]">
              <img
                src={project.img}
                alt={project.info}
                loading="lazy"
                className="w-full h-full rounded-t"
              />
            </div>

            <h4 className="px-3 py-2 text-m leading-snug font-sans">
              {project.info}
            </h4>
            <div className="mt-1 mb-[1rem] flex flex-wrap gap-2">
                {project.stacks.map((i) => (
                  <span key={i} className="rounded-md bg-secondary text-secondary-foreground/90 px-2.5 py-1 text-xs">{i}</span>
                ))}
              </div>
              <div  className="bg-gradient-primary  w-[fit-content] ml-[auto] text-primary-foreground shadow-glow p-[0.8rem] text-end rounded-[50%] hover:opacity-90">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" font-sans"
                >
                <img src={arrow} className="h-5 w-5 text-primary" alt="" srcset="" />
                </a>
                </div>
              {/* <button  size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow py-[0.5rem] px-[0.8rem] rounded-[0.3rem] hover:opacity-90">
                <h4 className="px-3">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" font-sans"
                >
                    Click to view website
                </a>
                </h4>
            
          </button> */}

          </div>
        ))}
      </div>
    </main>

  )
}

export default Projects