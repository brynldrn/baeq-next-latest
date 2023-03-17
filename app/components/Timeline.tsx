import { BsPersonWorkspace } from 'react-icons/bs'
import { MdOutlineHomeWork } from 'react-icons/md'
import { BiLinkExternal } from 'react-icons/bi'

export default function Timeline() {
  return (
    <section id="experience" className="relative">
      <h1 className='text-theme-white font-bold text-3xl'>Experience<span className='font-mono text-theme-light-blue'>.</span></h1>

      {/* timeline */}
      <div className="max-w-2xl mx-auto mt-7">
        <div className="relative pl-16 ml-4">
          {/* line */}
          <div className="w-1 h-full absolute top-0 left-0 bg-theme-gray" />

          {/* timeline item */}
          <div className="relative mb-4">
            {/* timeline icon */}
            <div className='absolute top-0 -left-[86px] w-12 h-12 rounded-full text-2xl text-theme-white bg-gradient-to-br from-theme-blue to-theme-light-blue flex items-center justify-center'>
              <BsPersonWorkspace />
            </div>
            {/* timeline body */}
            <div className='mix-blend-normal rounded-lg shadow-xl bg-gradient-to-br from-theme-blue to-theme-light-blue p-5 relative text-theme-white border-b-2 border-b-theme-white'>
              <h2 className='block mb-3'>
                <span className='block'>iCube Digital Solutions Inc.</span>
                <span className='text-xs inline-block bg-theme-light-blue rounded-sm px-1'>2022 - present</span>
              </h2>
              <p className='text-theme-white'>Senior React Developer</p>
              <a href="https://i-cube-digitalsolutions.com/" target="_blank" className='inline-flex gap-1 items-center'>
                <span>Visit Site</span>
                <BiLinkExternal />
              </a>
            </div>
          </div>
          {/* timeline item */}
          <div className="relative mb-4">
            {/* timeline icon */}
            <div className='absolute top-0 -left-[86px] w-12 h-12 rounded-full text-2xl text-theme-white bg-theme-gray flex items-center justify-center'>
              <MdOutlineHomeWork />
            </div>
            {/* timeline body */}
            <div className='mix-blend-normal rounded-lg shadow-xl bg-theme-gray p-5 relative text-theme-white border-b-2 border-b-theme-blue'>
              <h2 className='block mb-3'>
                <span className='block'>Code & Theory</span>
                <span className='text-xs inline-block bg-theme-blue rounded-sm px-1'>2018 - 2022</span>
              </h2>
              <p className='text-theme-white/40'>Full Stack Web Developer</p>
              <a href="https://www.codeandtheory.com/" target="_blank" className='inline-flex gap-1 items-center'>
                <span>Visit Site</span>
                <BiLinkExternal />
              </a>
            </div>
          </div>
          {/* timeline item */}
          <div className="relative mb-4">
            {/* timeline icon */}
            <div className='absolute top-0 -left-[86px] w-12 h-12 rounded-full text-2xl text-theme-white bg-theme-gray flex items-center justify-center'>
              <MdOutlineHomeWork />
            </div>
            {/* timeline body */}
            <div className='mix-blend-normal rounded-lg shadow-xl bg-theme-gray p-5 relative text-theme-white border-b-2 border-b-theme-blue'>
              <h2 className='block mb-3'>
                <span className='block'>Phase 1 Philippines</span>
                <span className='text-xs inline-block bg-theme-blue rounded-sm px-1'>2017 - 2018</span>
              </h2>
              <p className='text-theme-white/40'>Systems Engineer</p>
              <a href="https://www.phase1-ph.com/" target="_blank" className='inline-flex gap-1 items-center'>
                <span>Visit Site</span>
                <BiLinkExternal />
              </a>
            </div>
          </div>
          {/* timeline item */}
          <div className="relative mb-4">
            {/* timeline icon */}
            <div className='absolute top-0 -left-[86px] w-12 h-12 rounded-full text-2xl text-theme-white bg-theme-gray flex items-center justify-center'>
              <MdOutlineHomeWork />
            </div>
            {/* timeline body */}
            <div className='mix-blend-normal rounded-lg shadow-xl bg-theme-gray p-5 relative text-theme-white border-b-2 border-b-theme-blue'>
              <h2 className='block mb-3'>
                <span className='block'>StraightArrow Corp.</span>
                <span className='text-xs inline-block bg-theme-blue rounded-sm px-1'>2015 - 2017</span>
              </h2>
              <p className='text-theme-white/40'>Frontend Developer</p>
              <a href="https://www.straightarrow.com.ph/" target="_blank" className='inline-flex gap-1 items-center'>
                <span>Visit Site</span>
                <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
