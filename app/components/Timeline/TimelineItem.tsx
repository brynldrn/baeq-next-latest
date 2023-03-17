import { BsPersonWorkspace } from 'react-icons/bs'
import { MdOutlineHomeWork } from 'react-icons/md'
import { BiLinkExternal } from 'react-icons/bi'
import classNames from 'classnames'

type TimelineItemType = {
  companyName: string,
  year: string,
  position: string,
  url: string,
  isActive?: boolean,
}

export default function TimelineItem({ companyName, year, position, url, isActive }: TimelineItemType) {
  return (
    <div className="relative mb-4">
      {/* timeline icon */}
      <div className={classNames('absolute top-0 -left-[86px] w-12 h-12 rounded-full text-2xl text-theme-white flex items-center justify-center', {
        'bg-gradient-to-br from-theme-blue to-theme-light-blue': isActive,
        'bg-theme-gray': !isActive
      })}>
        {isActive ? <BsPersonWorkspace /> : <MdOutlineHomeWork />}
      </div>
      {/* timeline body */}
      <div className={classNames('mix-blend-normal rounded-lg shadow-xl p-5 relative text-theme-white border-b-2', {
        'bg-gradient-to-br from-theme-blue to-theme-light-blue border-b-theme-white': isActive,
        'bg-theme-gray border-b-theme-blue': !isActive
      })}>
        <h2 className='block mb-3'>
          <span className='block'>{ companyName }</span>
          <span className={classNames('text-xs inline-block rounded-sm px-1', {
            'bg-theme-light-blue': isActive,
            'bg-theme-blue': !isActive
          })}>{ year }</span>
        </h2>
        <p className='text-theme-white/40'>{ position }</p>
        <a href={url} target="_blank" className='inline-flex gap-1 items-center'>
          <span>Visit Site</span>
          <BiLinkExternal />
        </a>
      </div>
    </div>
  )
}

