import Link from 'next/link';
import Head from '../components/head/head';
import { useState } from 'react';

interface PortfolioItem {
  img?: string;
  title: string;
  description: string;
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



export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('focus');

  const categories: { type: ProjectCategory, title: string }[] = [
    { type: 'focus', title: 'Focus' },
    { type: 'web', title: 'Web' },
    { type: 'ios', title: 'iOS' },
    { type: 'open_source', title: 'Open Source' }
  ];
  const items: PortfolioItem[] = [
    {
      title: 'Acquine',
      description: 'Advanced image analytics service. Estimates image visual aesthetic quality and perceived emotion among other qualities.',
      img: '/projects/acquine.png',
    },
    {
      title: 'Emotion Guide',
      description: 'Guides users to nearby locations which (according to analysis performed on geotagged images) provide a positive emotional response.'
    },
    {
      title: 'Test Service',
      description: 'Amet esse ad fugiat Lorem elit nostrud aliquip magna nulla nostrud elit non quis consequat.'
    }
  ];

  let active: {
    overlay?: HTMLDivElement,
    expanded: HTMLDivElement,
    original: HTMLDivElement,
  };

  const expandItem = (target: EventTarget) => {
    if (!(target instanceof HTMLDivElement)) return;

    // Create Overlay
    const overlay = document.createElement("div");
    overlay.classList.add("item-overlay");
    document.body.appendChild(overlay);
    overlay.addEventListener('click', minimize);


    // Clone selected element
    const clone = utils.cloneTarget(target);
    active = {
      expanded: clone,
      original: target,
      overlay
    }
    active.expanded.classList.add('expanded');
    active.expanded.addEventListener('click', minimize);
    document.body.appendChild(clone);


    // Create container dimensions
    let container = {
      width: 300,
      height: 500,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };


    // Determine scaling/transform factors

    const defaults = { width: 700, height: 500, margin: 0 };
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const rect = active.expanded.getBoundingClientRect();
    const scaleX = Math.min(defaults.width, viewportWidth) / rect.width;
    const scaleY = Math.min(defaults.height, viewportHeight) / rect.height;
    const scale = Math.min(scaleX, scaleY);
    const translateX = (-rect.left + (viewportWidth - rect.width) / 2 + defaults.margin + container.left) / scale;
    const translateY = (-rect.top + (viewportHeight - rect.height) / 2 + defaults.margin + container.top) / scale;
    const transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";

    // Apply transform
    active.expanded.style.transform = transform;
  }

  const minimize = () => {
    if (!active) return;

    return new Promise((res) => {
      active.expanded.style.transform = '';
      active.overlay.style.transition = 'opacity 150ms';
      active.overlay.style.opacity = '0';

      active.expanded.addEventListener('transitionend', e => {
        if (!active || e.propertyName !== 'transform') return;

        active.expanded.classList.remove('expanded');
        document.body.removeChild(active.expanded);
        document.body.removeChild(active.overlay);

        // Reset active state
        active = null;
      });
    });
  }

  return (
    <div className="container flex-col-center">
      <Head title="future || LP" />

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
        <span className="page-header">
          woah, check out these things I made (or contributed to)
        </span>

        <div className="content">
          <div className="controls flex-col-center">
            {categories.map(cat => (
              <span className={cat.type === activeCategory ? 'active' : ''} onClick={() => setActiveCategory(cat.type)}>{cat.title}</span>
            ))}
          </div>

          <div className="items">
            {items.map(item => (
              <div className={`item flex-col-center` + (item.img ? ' has-image' : '')} onClick={e => expandItem(e.target)}>
                {item.img && <img src={item.img} />}
                <span>{item.title}</span>
              </div>
            ))}

          </div>
        </div>
      </main>

      <style jsx>{`
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
          // width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .controls {
          display: flex;
          flex-direction: row !important;
          margin-bottom: 25px;
        }

        .controls span {
          margin: 0 15px;
          user-select: none;
          padding-bottom: 3px;
        }
        .controls span:hover {
          text-decoration: underline #ffffff dotted;
          cursor: pointer;
        }
        .controls span.active {
          text-decoration: underline #fff solid;
        }

        .control-section {

        }


        // Project Items
        .items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          max-width: 600px;
          min-width: 300px;
          grid-gap: 50px;
          column-gap: 50px;
        }

        .item {
          border: 1px solid #fff;
          width: 150px;
          height: 150px;
          position: relative;
          cursor: zoom-in;
        }
        .item, .item * {
          transition: 0.24s cubic-bezier(.8,1.39,.91,1.29);
        }
        .item:hover {
          background: #fff;
          transform: scale(1.03);
        }
        
        .item .expand {
          position: absolute;
          top: 3px;
          right: 3px;
          display: none;
        }
        .item:hover .expand {
          display: flex;
        }
        .item img {
          max-height: 40%;
          pointer-events: none;
        }
        .item span {
          font-weight: semibold;
          font-size: 1.1em;
          user-select: none;
          cursor: default;
          pointer-events: none;
        }
        .item:hover span {
          color: #000;
        }


        // Active state
        .item-overlay {
          width: 100vw;
          height: 100vh;
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
