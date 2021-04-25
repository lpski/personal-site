import Link from 'next/link';
import Head from '../components/head/head';
import { useState } from 'react';

interface PortfolioItem {
  title: string;
  description: string;
  img?: string;
  tags?: ProjectCategory[];
};

type ProjectCategory = 'focus' | 'web' | 'ios' | 'open_source';


const utils = {
  cloneTarget: (template) => {
    const _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
    const clone = template.cloneNode();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    clone.removeAttribute("id");
    clone.style.position = "absolute";
    clone.style.top = top + scrollTop + "px";
    clone.style.left = left + scrollLeft + "px";
    clone.style.width = width + "px";
    clone.style.height = height + "px";
    clone.style.transform = "";
    return clone;
  }
}



export default function Quant() {

  return (
    <div className="container flex-col-center">
      <Head title="LPQRD" />

      <main className="flex-col-center start-top">

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
        <span className="page-header">Oh, hello there.</span>

        <div className="page-section flex-col-center">
          <span className="subheader">A very (very) short bio</span>
          <div className="page-subsection">
            <img src=""/>
          </div>
        </div>
        
      </main>

      <style jsx>{`



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


        main {
          flex: 1;
          font-family: "trajan pro 3", serif;
          color: #fff;
          position: relative;
        }

        .page-header {
          // margin: 20vh 0 15px;
          font-size: 1.5em;
          font-style: semibold;
        }

        .page-section { margin: 30px 0; }
        .page-section .subheader { font-size: 1.2em; }

        .content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .start-top {
          justify-content: flex-start;
        }
  
        .container {
          min-height: 100vh;
          background: #000;
        }

        .flex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
        }

        // Shared
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
      `}</style>
    </div>
  )
}
