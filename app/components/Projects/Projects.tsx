import Image from "next/image";
import { SiJavascript } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <section id="projects" className="pb-20">
      <h1 className='text-theme-white font-bold text-3xl'>Projects<span className='font-mono text-theme-light-blue'>.</span></h1>
      <div className="flex w-full gap-5 flex-wrap mt-5">
        <article className="relative min-h-[350px] max-w-[100dvw] md:max-w-[350px] flex w-full overflow-hidden rounded-2xl bg-theme-white">
          <div className="flex justify-between w-full max-h-10 pr-5 items-center">
            <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">Project Name</span>
            <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">2022</span>
          </div>
          {/* site logo */}
          <div className="absolute top-2 left-2">
            <Image src="https://dummyimage.com/40x40/000/000000" alt="Project Image" width={40} height={40}  />
          </div>

          {/* main image */}
          <div className="absolute w-[85%] h-[85%] bottom-0 right-0 rounded-tl-2xl overflow-hidden rounded-br-2xl">
            <Image src="https://dummyimage.com/600x400/000/000000" alt="Project Image" fill  />
          </div>

          {/* techstack */}
          <div className="flex flex-col flex-wrap absolute left-2 top-12 mt-5 w-10 text-3xl items-center gap-2">
            <SiJavascript />
            <SiJavascript />
            <SiJavascript />
            <SiJavascript />
            <a href="https://google.com" className="!text-3xl" target="_blank" >
              <BiLinkExternal />
            </a>
          </div>
        </article>
        <article className="relative min-h-[350px] max-w-[100dvw] md:max-w-[350px] flex w-full overflow-hidden rounded-2xl bg-theme-white">
          <div className="flex justify-between w-full max-h-10 pr-5 items-center">
            <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">Project Name</span>
            <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">2022</span>
          </div>
          {/* site logo */}
          <div className="absolute top-2 left-2">
            <Image src="https://dummyimage.com/40x40/000/000000" alt="Project Image" width={40} height={40}  />
          </div>

          {/* main image */}
          <div className="absolute w-[85%] h-[85%] bottom-0 right-0 rounded-tl-2xl overflow-hidden rounded-br-2xl">
            <Image src="https://dummyimage.com/600x400/000/000000" alt="Project Image" fill  />
          </div>

          {/* techstack */}
          <div className="flex flex-col flex-wrap absolute left-2 top-12 mt-5 w-10 text-3xl items-center gap-2">
            <SiJavascript />
            <SiJavascript />
            <SiJavascript />
            <SiJavascript />
            <a href="https://google.com" className="!text-3xl" target="_blank" >
              <BiLinkExternal />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
