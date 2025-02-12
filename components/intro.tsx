import Image from 'next/image'
import Link from 'next/link'

import authorImage from '@/public/images/authors/rajib-1.png'
import { Button } from '@/components/ui/button'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-24 gap-y-4 pb-12 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Rajib.</h1>
        <p className='mt-6 font-light text-muted-foreground'>
          I&#39;m a full-stack web developer based in Dhaka, Bangladesh. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
        <Button className='mt-10'>
          <Link href='/resume'>Resume</Link>
        </Button>
        <Button variant='outline' className='ml-4 mt-6'>
          <Link href='/contact'>Contact me</Link>
        </Button>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg border'
          src={authorImage}
          alt='Hamed Bahram'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}
