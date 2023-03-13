import Image from 'next/image'
import { Fira_Code, Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope', 
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode', 
})

export default function Home() {
  return (
    <div className={`${manrope.variable} ${firaCode.variable} font-sans`} id="top">
      <header className='px-5 pt-10 flex flex-wrap w-full'>
        <div className='w-10'>
          <a href="#top">
            <Image src="/logo.svg" alt="Bryan Aldrin" width={40} height={40} />
          </a>
        </div>
        <nav className='basis-full w-full mt-4'>
          <ul className='flex flex-wrap w-full gap-3'>
            <li><a href="#projects" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>01.</span> projects</a></li>
            <li><a href="#socials" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>02.</span> experience</a></li>
            <li><a href="#socials" className='font-mono bg-theme-blue/25 px-2 py-1 rounded-md shadow-md text-theme-white/40'><span className='font-mono text-theme-light-blue'>03.</span> socials</a></li>
          </ul>
        </nav>
      </header>
      <main className='px-5 mt-10'>
        <h1 className='text-5xl font-bold text-white'>Bryan Aldrin E. Quinalayo<span className='font-mono text-theme-light-blue'>.</span></h1>
        <h2 className='text-3xl font-extralight text-white/40'>I build things for the web<span className='font-mono text-theme-light-blue'>.</span></h2>
        <div className="text-white/40 block mt-3">I&rsquo;m a React Developer by profession for more than 8 years now. Creating websites and webapps has always been my time-killer besides gaming. Hit me up for gigs<span className='font-mono text-theme-light-blue'>!</span></div>
      </main>
    </div>
  )
}
