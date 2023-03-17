import Image from "next/image";

export default function Header() {
  return (
    <header className='px-5 pt-10 flex flex-wrap w-full md:px-20 md:max-w-4xl md:mx-auto'>
      <div className='w-10'>
        <a href="#top">
          <Image src="/logo.svg" alt="Bryan Aldrin" width={40} height={40} />
        </a>
      </div>
      <nav className='basis-full w-full mt-4'>
        <ul className='flex flex-wrap w-full gap-3'>
          <li><a href="#experience" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>01.</span> experience</a></li>
          <li><a href="#projects" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>02.</span> projects</a></li>
          <li><a href="#socials" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>03.</span> socials</a></li>
        </ul>
      </nav>
    </header>
  )
}
