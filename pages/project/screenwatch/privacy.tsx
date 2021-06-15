import Link from 'next/link';
import Head from '../../../components/head/head';

export default function ScreenWatchTerms() {

  return (
    <div className="container flex-col-center">
      <Head title="Screen Watch" />

      <main className="flex-col-center">

        {/* Nav */}
        <Link href="/">
          <button className="work tl">LP</button>
        </Link>

        <div className="contacts">
          <a href="https://github.com/lpski">
            <img src="/icons/gh.svg" className="smaller" />
          </a>
          <img src="/icons/li.svg" />
        </div>


        {/* Page Content */}
        <h1 className="page-header">Screen Watch</h1>
        <h3 className="subheader">Privacy Policy</h3>
        <span><aside>Last Updated: 20 Dec 2020</aside></span>

        <div className="content">

          <p>
            This policy applies to all information collected or submitted on Screen Watch's website and our app for macOS and any other devices and platforms.
          </p>

          <h5>Information we collect</h5>
          <p>
            Screen Watch does not require any account for usage and collects no user information - personally identifiable or not.
          </p>

          <h5>Technical basics</h5>
          <p>
            For face and gaze tracking functionality, we must obtain access to a webcam.
            Upon opening Screen Watch, a permission request for camera access is displayed to the user.
            Screen Watch camera permissions can be modified in System Preferences on macOS.
          </p>

          <h5>Information usage</h5>
          <p>
            All camera feed data is processed locally on the user's machine and never sent elsewhere.
            Each frame is discarded after having been analyzed.
          </p>

          <h5>Security</h5>
          <p>
            We implement a variety of security measures to help keep your information secure.
            For instance, the application has no access to the network.
            Video data is processed locally, can't be sent elsewhere, and is not stored after processing.
          </p>

          <h5>California Online Privacy Protection Act Compliance</h5>
          <p>
            We comply with the California Online Privacy Protection Act.
            We therefore will not distribute your personal information to outside parties without your consent.
          </p>

          <h5>Children’s Online Privacy Protection Act Compliance</h5>
          <p>
            We never collect or maintain any information.
          </p>

          <h5>Your consent</h5>
          <p>
            By using Screen Watch, you consent to our privacy policy.
          </p>

          <h5>Contacting us</h5>
          <p>
            If you have questions regarding this privacy policy, you may email l.porupski@outlook.com
          </p>

          <h5>Changes to this policy</h5>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page. Summary of changes so far:
          </p>

        </div>
      </main>

      <style jsx>{`
        // Shared
        .flex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
  
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          background: #000;
        }

        main {
          flex: 1;
          font-family: "trajan pro 3", serif;
          color: #fff;
          position: relative;
        }

        .page-header {
          margin-bottom: 5vh;
        }

        .content {
          padding: 30px;
          max-width: min(80%, 500px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .content h5 {
          font-size: 1em;
          font-weight: 700;
          margin-top: 30px;
          margin-bottom: 3px;
        }
        .content p {
          margin-top: 6px;
          width: 100%;
          text-align: center;
        }


        button {
          position: absolute;
          background: transparent;
          border: none;
          font: inherit;
          color: inherit;
          cursor: pointer;
        }
        button.tl { top: 20px; left: 20px }
        button.tr { top: 20px; right: 20px }

        .contacts {
          position: absolute;
          background: transparent;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;

        }
        .contacts img {
          color: #fff;
          width: 26px;
          height: 26px;
          cursor: pointer;
        }
        .contacts img.smaller {
          width: 22px;
          height: 22px;
        }
        .contacts img:not(.smaller) { margin-top: -1px; }
        .contacts img:first-of-type { margin-right: 10px; }

        // End Shared

        
        .page-header { margin-bottom: 5px }

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

      `}</style>
    </div>
  )
}
