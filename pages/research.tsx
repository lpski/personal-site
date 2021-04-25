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
        <span className="page-header">Quant Research + Development</span>


        <div className="page-section">
          {/* <span className="subheader">Recent Trades (delayed)</span> */}
          <div className="page-subsection">
            NeuralNet-Based Quantitative Analysis + Algorithmic Trading
          </div>
        </div>

        <div className="page-section flex-col-center">
          <span className="subheader">Stock/FX Performance</span>
          <div className="page-subsection performance-grid">

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                0.5%
              </span>
              <span className="item-title">24hr</span>
            </div>

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                42.3%
              </span>
              <span className="item-title">1mo</span>
            </div>

          </div>
        </div>

        <div className="page-section flex-col-center">
          <span className="subheader">Crypto Performance</span>
          <div className="page-subsection performance-grid">

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                1.4%
              </span>
              <span className="item-title">24hr</span>
            </div>

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                128.5%
              </span>
              <span className="item-title">1mo</span>
            </div>

          </div>
        </div>

        <div className="page-section flex-col-center">
          <span className="subheader">NFL/NBA Betting Performance</span>
          <div className="page-subsection performance-grid">

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                0%
              </span>
              <span className="item-title">24hr</span>
            </div>

            <div className="grid-item flex-col-center">
              <span className="item-value green">
                <span className="value-prefix">+</span>
                530.9%
              </span>
              <span className="item-title">1mo</span>
            </div>

          </div>
        </div>

        {/* <div className="page-section">
          <span className="subheader">Recent Trades (delayed)</span>
          <div className="page-subsection">
            
          </div>
        </div> */}
        

      </main>

      <style jsx>{`
        .flex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
        .start-top {
          justify-content: flex-start;
        }
  
        .container {
          min-height: 100vh;
          background: #000;
        }

        main {
          flex: 1;
          font-family: "trajan pro 3", serif;
          color: #fff;
          position: relative;
        }

        .page-header {
          margin: 20vh 0 15px;
          font-size: 1.5em;
          font-style: semibold;
        }

        .content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .page-section { margin: 30px 0; }
        .page-section .subheader { font-size: 1.2em; }
        .performance-grid {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 15px;
        }
        .performance-grid .grid-item {
          margin: 0 30px;

        }
        .performance-grid .item-value { font-size: 1.5em; }
        .performance-grid .value-prefix {
          font-size: 0.8em;
          margin-right: 3px;
        }
        .performance-grid .item-value.green { color: #0DAC50; }
        .performance-grid .item-value.red { color: #C0392B; }



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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .item-overlay {
          background: rgba(0,0,0, 0.4);
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          user-select: none;
        }

        .item.expanded {
          background: #fff;
          cursor: zoom-out;
          border-radius: 1px;
          transition: transform .3s cubic-bezier(.2, 0, .2, 1), opacity .5s;
          z-index: 3;
        }

      `}</style>
    </div>
  )
}
