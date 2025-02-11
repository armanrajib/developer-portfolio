import { ModeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <section className='mx-10 py-5'>
      <div className='container flex flex-row-reverse items-center justify-between'>
        <ModeToggle />
        <h1 className='text-3xl font-bold'>Portfolio</h1>
      </div>
    </section>
  )
}
