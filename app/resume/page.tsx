import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/button'
import PDFLoader from '@/components/pdf-loader'

export const metadata: Metadata = {
  title: "Resume | Rajib's Portfolio",
  description: 'View and download resume of Arman Hossain Rajib.'
}

function Page() {
  return (
    <section className='container mb-16 mt-28 max-w-6xl'>
      <div className='flex justify-end'>
        <Button>
          <Link
            href='/resume/resume.pdf'
            target='_blank'
            className='flex items-center gap-2'
          >
            <ArrowDownTrayIcon className='h-6 w-6' />
            <span>Download Resume</span>
          </Link>
        </Button>
      </div>

      <PDFLoader />
    </section>
  )
}

export default Page
