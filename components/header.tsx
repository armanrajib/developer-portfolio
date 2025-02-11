import Link from 'next/link'

import { ModeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-7xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            AHR
          </Link>
        </div>

        <ul className='text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
