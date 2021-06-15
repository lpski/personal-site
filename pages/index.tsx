import Head from '../components/head/head';
import styles from '../styles/Home.module.css'

export default function Home() {

  const links = {
    // 'projects': 'portfolio',
    // 'research': 'research',
    'contact': 'contact',
  }

  return (
    <div className="page" lang="en">
      <Head title='LP' />

      <div className={styles.bg}/>

      <main className={`${styles.fg} h-screen flex justify-center items-center flex-col`}>

        <div>
          <img className={styles.branding} src="/logos/v1.svg" alt="LP" />
        </div>

        <div className="mt-3">
          {Object.entries(links).map(([page, path]) => (
            <a key={'home-' + path} className={styles.navlink} href={'/' + path}>{page}</a>
          ))}
          {/* <a className={styles.navlink} href="/research">research</a>
          <a className={styles.navlink} href="/portfolio">projects</a>
          <a className={styles.navlink} href="/contact">contact</a> */}
          {/* <a href="/portfolio">projects</a>
          <a href="https://pekul.me">blog</a>
          <a href="/me/lp_res_2k17.pdf">resume</a> */}
        </div>
      </main>

    </div>
  )
}
