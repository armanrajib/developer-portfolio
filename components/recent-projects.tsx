import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const recentProjects = [
  {
    id: 0,
    title: 'The Wild Oasis Website',
    slug: 'the-wild-oasis-website',
    description:
      "This is a next.js user-facing web-application where users can explore different cabins & book them according to their timetable. This website doesn't include any payment systems. So, the users can make payments when they arrive to the resort.",
    image: '/images/projects/the-wild-oasis-website.png',
    github: 'https://github.com/armanrajib/the-wild-oasis-website',
    live: 'https://the-wild-oasis-armanrajib.vercel.app/'
  },
  {
    id: 1,
    title: 'Natours',
    slug: 'natours',
    description:
      'The Natours website showcases a fictional platform for booking adventurous nature tours, highlighting features like tour packages, pricing, and user reviews. It emphasizes stunning design and responsive layout to demonstrate modern web development techniques.',
    image: '/images/projects/natours.png',
    github: 'https://github.com/armanrajib/natours',
    live: ''
  }
]

function RecentProjects() {
  return (
    <section className='mt-8'>
      <h1 className='title'>Recent Projects</h1>

      <div className='mt-4 grid gap-4 md:grid-cols-2'>
        {recentProjects.map(project => (
          <Card key={project.id} className='mt-6 max-w-[33rem]'>
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                className='mb-6 w-full rounded-lg'
                width={1920}
                height={1080}
              />
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button>
                <a href={project.github} target='_blank'>
                  GitHub
                </a>
              </Button>
              {project.live && (
                <Button variant='secondary' className='ml-4'>
                  <a href={project.live} target='_blank'>
                    Live Link
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Link
        href='/projects'
        className='mt-6 inline-flex items-center gap-2 font-bold text-muted-foreground underline decoration-1 underline-offset-4 transition-colors hover:text-foreground'
      >
        <span>All projects</span>
      </Link>
    </section>
  )
}

export default RecentProjects
