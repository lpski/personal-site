import Link from 'next/link';
import Head from '../components/head/head';

export default function Work() {
  return (
    <div className="container flex-col-center">
      <Head title="future || LP" />

      <main className="flex-col-center">
        <button className="work tl flex-col-center ">
          <span className="alltheserif">LP</span>
        </button>
        <Link href="/">
          <button className="about tr flex-col-center">
            <span>take me back!</span>
          </button>
        </Link>
        <div className="header-content">
          Here's some of my past.
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          background: #000;
        }

        main {
          flex: 1;
          color: #fff;
        }

        button {
          position: absolute;
          background: transparent;
          border: none;
          font: inherit;
          color: inherit;
        }
        button.tl {
          top: 20px;
          left: 20px;
        }
        button.tr {
          top: 20px;
          right: 20px;
          border: 1px solid #fff;
        }

        .alltheserif {
          font-family: "trajan pro 3", serif;
        }

        button span {

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
