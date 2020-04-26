import Head from '../components/head/head';

export default function FutureHome() {
  return (
    <div className="container flex-col-center">
      <Head title="future || LP" />

      <main className="flex-col-center">
        {/* It's under construction, ok? */}
        {/* <h1 className="title">LP</h1> */}
        {/* <img className="mySpecialBrand" draggable="false" src="/logos/scribble_circle.png"/> */}

        <button className="work tl">LP</button>
        <button className="about tr">projects</button>
        <div className="header-content">
          Developer. Creator.
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
