import Obfuscate from 'react-obfuscate';
import Head from '../components/head/head';
import styles from '../styles/About.module.css';
import { Navbar } from '../components/nav/navbar';

export default function About() {
  return (
    <div className="page">
      <Head title="LP | me" />

      <main className={`${styles.fg} h-screen `}>
        <Navbar light socials />

        <div className="flex justify-center items-center flex-col">

          <div className="group relative bg-white shadow-md rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5">
            <div className="flex flex-row text-indigo-500 px-10 py-4">

              <Obfuscate email="l.porupski@outlook.com" />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
