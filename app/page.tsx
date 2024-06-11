import Hero from '../components/Hero';
import { FloatingNav }  from '@/components/ui/FloatingNav'
import { IoHomeOutline } from 'react-icons/io5'
import Grid from '../components/Grid';

export default function Home() {
  return (
    <main className='relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <IoHomeOutline />}
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
