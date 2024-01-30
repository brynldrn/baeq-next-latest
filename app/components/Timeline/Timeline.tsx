import TimelineItem from './TimelineItem'

export default function Timeline() {
  return (
    <section id="experience" className="relative">
      <h1 className='text-theme-white font-bold text-3xl'>Experience<span className='font-mono text-theme-light-blue'>.</span></h1>

      {/* timeline */}
      <div className="max-w-2xl mx-auto mt-7">
        <div className="relative pl-16 ml-4">
          {/* line */}
          <div className="w-1 h-full absolute top-0 left-0 bg-theme-gray" />
          <TimelineItem
            companyName='Nelnet Philippines Inc'
            year='2023 - Present'
            position='Software Engineer II'
            url=''
            isActive
          />
          <TimelineItem
            companyName='i-cube Digital Solutions'
            year='2022 - 2023'
            position='Senior React Developer'
            url=''
          />
          <TimelineItem
            companyName='Code & Theory'
            year='2018 - 2022'
            position='Full Stack Web Developer'
            url=''
          />
          <TimelineItem
            companyName='Phase 1 Philippines'
            year='2017 - 2018'
            position='Systems Engineer'
            url=''
          />
          <TimelineItem
            companyName='StraightArrow Corp.'
            year='2015 - 2017'
            position='Frontend Developer'
            url=''
          />
        </div>
      </div>
    </section>
  )
}
