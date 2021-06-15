import Head from '../../components/head/head';
import Obfuscate from 'react-obfuscate';

export default function Home() {

  return (
    <div className="container flex-col-center" lang="en">
      <Head title="l || p" />

      <div className="bg wave" />

      <main className="flex-col-center">

        <div className="branding">
            <h1>Screen Watch</h1>
        </div>
        <div className="links">
          <a href="/project/screenwatch/privacy">Privacy Policy</a>
          <span>
            Contact:
            <Obfuscate email="l.porupski@outlook.com" />
          </span>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        .bg {
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          position: absolute;
        }

        .wave {
          background: #f5f0f0 url(/graphics/wave.svg) 0 0/75pt repeat;
          z-index: -1;
          -webkit-animation: wave-slide 5s linear infinite;
          animation: wave-slide 5s linear infinite;
        }

        @keyframes wave-slide {
          0% {
            background-position-x: 0px;
            background-position-y: 0px;
          }
          100% {
            background-position-x: 100px;
            background-position-y: 0px;
          }
        }

        main {
          flex: 1;
          color: #fff;
        }

        h1 {
            color: #000;
        }

        img {
          border: 1px solid #000;
        }

        a {
          margin: 0 15px;
          color: #000;
          // display: none;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow: hidden;
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
