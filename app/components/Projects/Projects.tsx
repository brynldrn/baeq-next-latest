import Image from "next/image";
import { SiJavascript } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { ProjectType } from "@/app/types/project";
import { MdRocketLaunch } from "react-icons/md";
import TechIcon from "../TechIcon";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  
  return (
    <section id="projects" className="pb-10">
      <h1 className='text-theme-white font-bold text-3xl'>Projects<span className='font-mono text-theme-light-blue'>.</span></h1>
      <div className="flex w-full gap-5 flex-wrap mt-5">
        {
          projects?.map(({ id, name, year, siteLogo, imageCap, url, techStack }) => {
            
            return (
              <article key={id} className="relative min-h-[350px] max-w-[100dvw] md:max-w-[358px] flex w-full overflow-hidden rounded-2xl bg-theme-white">
                <div className="flex justify-between w-full max-h-10 pr-5 items-center">
                  <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">{name}</span>
                  <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">{year}</span>
                </div>
                {/* site logo */}
                <div className="absolute top-2 left-2 flex justify-center items-center w-10 h-10">
                  {siteLogo ? (<Image src={siteLogo?.url} alt="Project Image" width={40} height={40} />) : (
                    <div className="text-3xl text-theme-light-blue">
                      <MdRocketLaunch />
                    </div>
                  )}
                </div>
  
                {/* main image */}
                <div className="absolute w-[85%] h-[85%] bottom-0 right-0 rounded-tl-2xl overflow-hidden rounded-br-2xl object-cover">
                  <Image src={imageCap?.url} alt="Project Image" fill className="object-cover"  />
                </div>
  
                {/* techstack */}
                <div className="flex flex-col flex-wrap absolute left-2 top-12 mt-5 w-10 text-3xl items-center gap-2">
                  {techStack?.map((t) => <TechIcon key={t} type={t} />)}
                  {url && <a href={url} className="!text-3xl" target="_blank" >
                    <BiLinkExternal />
                  </a>}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
