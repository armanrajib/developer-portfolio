import type { Metadata } from 'next'

import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: "Contact Me | Rajib's Portfolio",
  description: "Let's talk about your project."
}

function page() {
  return (
    <section className='pb-24 pt-36'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  )
}

export default page
