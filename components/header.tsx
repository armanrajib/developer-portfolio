'use client'

import Link from 'next/link'

import { ModeToggle } from '@/components/theme-toggle'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const active = 'text-foreground font-bold border-b-2 border-foreground py-0.5'

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-6xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            AHR
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li
            className={`transition-colors hover:text-foreground ${pathname === '/technology' && active}`}
          >
            <Link href='/technology'>Technology</Link>
          </li>
          <li
            className={`transition-colors hover:text-foreground ${pathname === '/projects' && active}`}
          >
            <Link href='/projects'>Projects</Link>
          </li>
          <li
            className={`transition-colors hover:text-foreground ${pathname === '/resume' && active}`}
          >
            <Link href='/resume'>Resume</Link>
          </li>
          <li
            className={`transition-colors hover:text-foreground ${pathname === '/contact' && active}`}
          >
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
