import { gql } from 'graphql-request'
import { Fira_Code, Manrope } from 'next/font/google'
import Header from './components/Header'
import Projects from './components/Projects/Projects'
import Separator from './components/Separator/Separator'
import Timeline from './components/Timeline/Timeline'
import client from './client'
import { ProjectType } from './types/project'
import { SiGithub, SiGmail } from 'react-icons/si'
import { HiHeart } from 'react-icons/hi'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode',
  display: 'swap'
})

async function getProjects() {
  const query = gql`
    query getProjects {
      projects(orderBy: year_DESC) {
        id
        name
        updatedAt
        url
        year
        imageCap {
          url
        }
        siteLogo {
          url
        }
        techStack
      }
    }`;

  const res: {
    projects: ProjectType[]
  } = await client.request(query);

  return res;
}

export default async function Home() {
  const data = await getProjects()

  return (
    <main className={`${manrope.variable} ${firaCode.variable} font-sans`} id="top">
      <Header />
      <div className='px-5 mt-10 md:px-20 md:max-w-4xl md:mx-auto'>
        <h1 className='text-5xl font-bold text-white'>Bryan Aldrin E. Quinalayo<span className='font-mono text-theme-light-blue'>.</span></h1>
        <h2 className='text-3xl font-extralight text-white/40'>I build things for the web<span className='font-mono text-theme-light-blue'>.</span></h2>
        <div className="text-white/40 block mt-3">I&rsquo;m a React Developer by profession for more than 8 years now. Creating websites and webapps has always been my time-killer besides gaming. <span className='hidden'>
        Hit me up for gigs<span className='font-mono text-theme-light-blue'>!</span></span></div>

        {/* separator component */}
        <Separator />

        {/* timeline component */}
        <Timeline />

        {/* separator component */}
        <Separator />

        {/* Projects component */}
        <Projects projects={data?.projects} />

        {/* separator component */}
        <Separator />

        <section id="socials">
          <h1 className='text-theme-white font-bold text-3xl'>Socials<span className='font-mono text-theme-light-blue'>.</span></h1>
          <div className="text-white/40 block mt-3">You can reach me through the following channels:</div>
          <div className='flex w-full justify-center items-center mt-4 mb-10 text-theme-light-blue gap-3'>
            <a href="https://github.com/brynldrn" target="_blank" rel="noopener noreferrer" className='!text-3xl'><SiGithub /></a>
            <a href="mailto:quinalayobryanaldrin@gmail.com" target="_blank" rel="noopener noreferrer" className='!text-3xl'><SiGmail /></a>
          </div>
        </section>
        <section className='my-5 flex justify-center items-center text-theme-light-blue text-base'>
          &copy; 2023 brynldrn <HiHeart />
        </section>
      </div>
    </main>
  )
}
