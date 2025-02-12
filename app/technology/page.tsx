import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Technology | Rajib’s Portfolio',
  description: 'This page showcases the technologies I have worked with.'
}

function page() {
  return (
    <section className='container mb-16 mt-28 max-w-3xl'>
      <h1 className='title text-center'>Technology</h1>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Programming Languages
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=js'
            width='40'
            height='40'
            alt='JavaScript'
          />
          <span className='ml-4'>JavaScript</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=ts'
            width='40'
            height='40'
            alt='TypeScript'
          />
          <span className='ml-4'>TypeScript</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=python'
            width='40'
            height='40'
            alt='JavaScript'
          />
          <span className='ml-4'>Python</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Frontend Frameworks & Tools
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=react'
            width='40'
            height='40'
            alt='React'
          />
          <span className='ml-4'>React</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=next'
            width='40'
            height='40'
            alt='Next.js'
          />
          <span className='ml-4'>Next.js</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=tailwind'
            width='40'
            height='40'
            alt='Tailwind CSS'
          />
          <span className='ml-4'>Tailwind CSS</span>
        </div>

        <div className='mb-4 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
            className='h-10 w-10'
          >
            <rect width='256' height='256' fill='none'></rect>
            <line
              x1='208'
              y1='128'
              x2='128'
              y2='208'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            ></line>
            <line
              x1='192'
              y1='40'
              x2='40'
              y2='192'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            ></line>
          </svg>

          <span className='ml-4'>Shadcn UI</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=sass'
            width='40'
            height='40'
            alt='SASS'
          />
          <span className='ml-4'>SASS</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Backend Frameworks & Tools
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=nodejs'
            width='40'
            height='40'
            alt='Node.js'
          />
          <span className='ml-4'>Node.js</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=express'
            width='40'
            height='40'
            alt='Express'
          />
          <span className='ml-4'>Express</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=django'
            width='40'
            height='40'
            alt='Django'
          />
          <span className='ml-4'>Django</span>
        </div>

        <div className='mb-4 flex items-center'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg'
            alt='Django Rest Framework'
            width={40}
          />
          <span className='ml-4'>Django Rest Framework</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=postman'
            width='40'
            height='40'
            alt='Postman'
          />
          <span className='ml-4'>Postman</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Mobile App Development
        </h2>

        <div className='mb-4 flex items-center'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
            alt='React Native'
            width={40}
          />
          <span className='ml-4'>React Native</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image src='/icons/expo.svg' width='40' height='40' alt='Expo' />
          <span className='ml-4'>Expo</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Database Tools
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=mysql'
            width='40'
            height='40'
            alt='MySQL'
          />
          <span className='ml-4'>MySQL</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=postgres'
            width='40'
            height='40'
            alt='PostgreSQL'
          />
          <span className='ml-4'>postgreSQL</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=mongo'
            width='40'
            height='40'
            alt='MongoDB'
          />
          <span className='ml-4'>MongoDB</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=prisma'
            width='40'
            height='40'
            alt='Prisma'
          />
          <span className='ml-4'>Prisma ORM</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='/icons/drizzle.svg'
            width='40'
            height='40'
            alt='Drizzle'
          />
          <span className='ml-4'>Drizzle ORM</span>
        </div>

        <div className='mb-4 flex items-center'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg'
            alt='Mongoose'
            width={40}
          />

          <span className='ml-4'>Mongoose ODM</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=supabase'
            width='40'
            height='40'
            alt='Supabase'
          />
          <span className='ml-4'>Supabase</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image src='/icons/neon.svg' width='40' height='40' alt='Neon' />
          <span className='ml-4'>Neon</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Testing Tools
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=jest'
            width='40'
            height='40'
            alt='Jest'
          />
          <span className='ml-4'>Jest</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=vitest'
            width='40'
            height='40'
            alt='Vitest'
          />
          <span className='ml-4'>Vitest</span>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Version Control Systems
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=git'
            width='40'
            height='40'
            alt='Git'
          />
          <span className='ml-4'>Git</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=github'
            width='40'
            height='40'
            alt='GitHub'
          />
          <span className='ml-4'>GitHub</span>
        </div>

        <div className='mt-12'>
          <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
            Design Tools
          </h2>

          <div className='mb-4 flex items-center'>
            <Image
              src='https://skillicons.dev/icons?i=figma'
              width='40'
              height='40'
              alt='Figma'
            />
            <span className='ml-4'>Figma</span>
          </div>

          <div className='mb-4 flex items-center'>
            <Image
              src='https://skillicons.dev/icons?i=ps'
              width='40'
              height='40'
              alt='Photoshop'
            />
            <span className='ml-4'>Photoshop</span>
          </div>

          <div className='mb-4 flex items-center'>
            <Image
              src='https://skillicons.dev/icons?i=ai'
              width='40'
              height='40'
              alt='Illustrator'
            />
            <span className='ml-4'>Illustrator</span>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <h2 className='mb-8 font-mono text-2xl font-semibold underline decoration-1 underline-offset-8'>
          Operating Systems
        </h2>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=windows'
            width='40'
            height='40'
            alt='Windows'
          />
          <span className='ml-4'>Windows</span>
        </div>

        <div className='mb-4 flex items-center'>
          <Image
            src='https://skillicons.dev/icons?i=kali'
            width='40'
            height='40'
            alt='Kali'
          />
          <span className='ml-4'>Kali Linux</span>
        </div>
      </div>
    </section>
  )
}

export default page
