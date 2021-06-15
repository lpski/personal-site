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
          {/* <a href="#">projects</a>
          <a href="#">blog</a>
          <a href="#">resume</a> */}
        </div>
      </main>

    </div>
  )
}
