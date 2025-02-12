import Intro from '@/components/intro'
import RecentProjects from '@/components/recent-projects'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='pb-20 pt-36'>
      <div className='container max-w-6xl'>
        <Intro />
        <RecentProjects />

        <section className='mt-20'>
          <h1 className='title'>Connect with me</h1>
          <p className='mt-6 font-light text-muted-foreground'>
            I&apos;m a junior software developer. I&apos;m learning new
            technologies everyday. If you want to connect with me, check out my
            social media links.
          </p>
          <p className='mt-2 font-light text-muted-foreground'>
            You can also directly message from here.
            <span className='ml-2 font-bold underline decoration-1 underline-offset-4'>
              <Link href='/contact'>Message me</Link>
            </span>
          </p>
        </section>
      </div>
    </section>
  )
}
