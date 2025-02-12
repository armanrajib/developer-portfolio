import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Projects | Rajib's Portfolio",
  description: 'This page showcases the projects I have worked on.'
}

const projectData = [
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
  },
  {
    id: 2,
    title: 'WorldWise',
    slug: 'worldwise',
    description:
      'This application implements a feature where an user can track all the places he/she travels in an interactive map.',
    image: '/images/projects/worldwise-2.png',
    github: 'https://github.com/armanrajib/worldwise',
    live: ''
  },
  {
    id: 3,
    title: 'usePopcorn',
    slug: 'usepopcorn',
    description:
      'In this application, user can search movie or tv shows, and give a rating out of 10. In this project, an public api is integrated for searching, and local storage is integrated to store the movies or tv shows rated by user.',
    image: '/images/projects/usepopcorn.png',
    github: 'https://github.com/armanrajib/usepopcorn',
    live: ''
  },
  {
    id: 4,
    title: 'React Quiz',
    slug: 'react-quiz',
    description:
      'In this application, a 15-questions quiz is implemented based react knowledge. In this project, context api and useReducer hook are used to manage the global ui state.',
    image: '/images/projects/react-quiz.png',
    github: 'https://github.com/armanrajib/react-quiz',
    live: ''
  },
  {
    id: 5,
    title: 'Far Away',
    slug: 'far-away',
    description:
      'This project is about packing list before travelling. There are several functionality are implemented here like adding items with quantity, ability to remove from the list and to be checked as packed, sorting items, clear the whole list, and a stat section about current status.',
    image: '/images/projects/far-away.png',
    github: 'https://github.com/armanrajib/far-away',
    live: 'https://far-away-armanrajib.netlify.app'
  },
  {
    id: 6,
    title: 'Nexter',
    slug: 'nexter',
    description:
      'In this application, a real estate website is implemented where users can explore different properties. This project is implemented using css grid layout.',
    image: '/images/projects/nexter.png',
    github: 'https://github.com/armanrajib/nexter--css',
    live: ''
  },
  {
    id: 7,
    title: 'Trillo',
    slug: 'trillo',
    description:
      'In this application, a hotel booking website is implemented where users can explore different hotels. This project is implemented using css flexbox layout.',
    image: '/images/projects/trillo.png',
    github: 'https://github.com/armanrajib/trillo--css',
    live: ''
  },
  {
    id: 8,
    title: 'Node Farm',
    slug: 'node-farm',
    description:
      'In this application, a simple node.js application is implemented where users can explore different products. This project is implemented using node.js.',
    image: '/images/projects/node-farm.png',
    github: 'https://github.com/armanrajib/node-farm',
    live: ''
  }
]

function page() {
  return (
    <section className='container mb-16 mt-28 max-w-6xl'>
      <h1 className='title text-center'>Projects</h1>

      <div className='mt-8 grid gap-2 md:grid-cols-2'>
        {projectData.map(project => (
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
    </section>
  )
}

export default page
