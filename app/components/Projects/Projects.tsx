import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="pb-20">
      <h1 className='text-theme-white font-bold text-3xl'>Projects<span className='font-mono text-theme-light-blue'>.</span></h1>
      <div className="flex w-full gap-4 flex-wrap mt-5">
        <article className="relative min-h-[300px] flex w-full overflow-hidden rounded-2xl bg-theme-white">
          <span className="block text-theme-gray ml-14 pt-4 font-light uppercase text-xs">Project Name</span>
          {/* site logo */}
          <div className="absolute top-2 left-2">
            <Image src="https://dummyimage.com/40x40/000/000000" alt="Project Image" width={40} height={40}  />
          </div>

          {/* main image */}
          <div className="absolute w-[85%] h-[85%] bottom-0 right-0 rounded-tl-2xl overflow-hidden rounded-br-2xl">
            <Image src="https://dummyimage.com/600x400/000/000000" alt="Project Image" fill  />
          </div>
        </article>
      </div>
    </section>
  )
}
