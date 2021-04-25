import Link from 'next/link';
import Head from '../components/head/head';

export default function Play() {
  return (
    <div className="container flex-col-center">
      <Head title="future || LP" />

      <main className="flex-col-center">
        <Link href="/">
          <button className="work tl">LP</button>
        </Link>
        <div className="header-content">
          not sure how you ended up here
          <br/>stay calm
          <br/><span style={{float: 'right'}}>stay calm</span>
          <br/>stay calm
          <br/>stay calm
        </div>
        <a className="country-roads" href="/">get me out of here</a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          background: #000;
        }

        main {
          flex: 1;
          font-family: "trajan pro 3", serif;
          color: #fff;
        }

        button {
          position: absolute;
          background: transparent;
          border: none;
          font: inherit;
          color: inherit;
        }
        button.tl { top: 20px; left: 20px }
        button.tr { top: 20px; right: 20px }

        .country-roads {
            margin-top: 10px;
            border: 1px solid white;
            padding: 3px 7px;
            text-decoration: none;
            color: white;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .flex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
