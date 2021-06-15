import Link from 'next/link';
import Head from '../components/head/head';
import { Navbar } from '../components/nav/navbar';

export default function Projects() {

  return (
    <div className="page">
      <Head title="Projects | LP" />

      <main className="w-full h-screen overflow-scroll flex flex-col items-center bg-black">

        <Navbar light socials={false}/>

        {/* Page Content */}
        <div className={`flex items-center flex-col w-full mt-8 px-10 text-white`}>

          <span className="text-md">woah, check out these things I made (or contributed to)</span>

          <div className="page-section flex flex-col items-center">

          
          </div>
        </div>
        
      </main>
    </div>
  )
}
