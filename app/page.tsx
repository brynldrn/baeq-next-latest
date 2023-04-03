import { gql } from 'graphql-request'
import { Fira_Code, Manrope } from 'next/font/google'
import Header from './components/Header'
import Projects from './components/Projects/Projects'
import Separator from './components/Separator/Separator'
import Timeline from './components/Timeline/Timeline'
import client from './client'
import { ProjectType } from './types/project'

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
        <div className="text-white/40 block mt-3">I&rsquo;m a React Developer by profession for more than 8 years now. Creating websites and webapps has always been my time-killer besides gaming. Hit me up for gigs<span className='font-mono text-theme-light-blue'>!</span></div>

        {/* separator component */}
        <Separator />

        {/* timeline component */}
        <Timeline />

        {/* separator component */}
        <Separator />

        {/* Projects component */}
        <Projects projects={data?.projects} />
      </div>
    </main>
  )
}
