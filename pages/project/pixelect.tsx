import Link from 'next/link';
import Head from '../../components/head/head';
import styles from '../../styles/Home.module.css'
import Obfuscate from 'react-obfuscate';

export default function Pixelect() {

  return (
    <div className="page" lang="en">
      <Head title='LP' />

      <div className={styles.bg}/>

      <main className={`${styles.fg} h-screen flex justify-center items-center flex-col`}>

        <div>
          <h1 className="text-6xl text-royal font-semibold">
            Pixelect
          </h1>

          <span className="text-xs text-gray-500 flex flex-row items-end justify-end">
            By
            <Link href="/">
              <img className={`${styles.branding} ml-2 cursor-pointer`} width="20px" height="20px" src="/logos/v1.svg" alt="LP" />
            </Link>
          </span>
          
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-row space-x-8 items-baseline">
            <a className={`mb-5 ${styles.navlink}`} href="https://apps.apple.com/us/app/pixelect/id1572379523">App Store</a>
            <a className={styles.navlink} href="/project/pixelect/privacy">Privacy Policy</a>
          </div>

          <div className="flex flex-row items-baseline">
            <span className={`text-black mt-4 ${styles.contact}`}>
              Contact: &nbsp;
            </span>
            <span className={styles.contactLink}>
              <Obfuscate email="l.porupski@outlook.com" />
            </span>
          </div>
        </div>
      </main>

    </div>
  )
}
