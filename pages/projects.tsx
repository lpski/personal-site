import Link from 'next/link';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Head from '../components/head/head';
import { Navbar } from '../components/nav/navbar';
import styles from '../styles/Projects.module.scss'

interface PortfolioItem {
  title: string;
  description: string;
  brief: string;
  color: string;
  link?: string;
  img?: string;
  icon?: JSX.Element;
  tags?: ProjectCategory[];
  contentLink?: string;
  linkLabel?: string;
  linkIcon?: JSX.Element;
};

type ProjectCategory = 'all' | 'focus' | 'web' | 'ios' | 'open_source' | 'ai' | 'finance';


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


const ExpandedItemInfo = (item: PortfolioItem) => (
  <div className="transform scale-50 -m-10">
    <h1 className="text-xl text-white text-bold scale-75">
      {item.title}
    </h1>

    <span className="text-light text-xs text-white">
      {item.description}
    </span>

    {item.contentLink && (
      <a className={`p-2 text-white border border-solid border-${item.color}`} href={item.contentLink}>
        {item.linkLabel}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    )}

  </div>
)


export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { type: ProjectCategory, title: string }[] = [
    { type: 'all', title: 'All' },
    { type: 'ios', title: 'iOS' },
    { type: 'web', title: 'Web' },
    { type: 'ai', title: 'Image Processing' },
    { type: 'finance', title: 'Finance' },
    { type: 'open_source', title: 'Open Source' }
  ];

  const items: PortfolioItem[] = [
    {
      title: 'Pixelect',
      color: 'lemon',
      link: 'project/pixelect',
      brief: 'Image aesthetics + emotion sentiment extraction application',
      description: 'Advanced image analytics service. Estimates image visual aesthetic quality and perceived emotion among other qualities.',
      img: '/projects/pixelect_alt.png',
      tags: ['all', 'focus', 'web', 'ios', 'ai'],
      contentLink: 'https://apps.apple.com/us/app/pixelect/id1572379523',
      linkLabel: 'Available on the App Store'
    },
    {
      title: 'Emotion Guide',
      color: 'sky',
      link: 'project/emotion-guide',
      brief: 'Emotion-aware location reccomendation application.',
      description: 'Guides users to nearby locations which (according to analysis performed on geotagged images) provide a positive emotional response.',
      img: '/projects/emotionguide.png',
      tags: ['all', 'focus', 'ios', 'ai']
    },
    {
      title: 'Screen Watch',
      color: 'poppy',
      link: 'project/screen-watch',
      brief: 'Screen privacy monitor powered by gaze detection.',
      description: 'Maximizes screen privacy in public places by utilzing face & gaze tracking to determine if others are looking at your screen',
      img: '/projects/screenwatch.png',
      tags: ['all', 'focus', 'ai', 'open_source'],
      contentLink: 'https://github.com/lpski/no-peeking',
      linkLabel: 'Github'
    },
    {
      title: 'Ticker Sentiment',
      color: 'royal',
      link: 'project/ticker-sentiment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="#745296">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      brief: 'Stock news scraping, analysis and storage.',
      description: 'Amet esse ad fugiat Lorem elit nostrud aliquip magna nulla nostrud elit non quis consequat.',
      tags: ['all', 'focus', 'finance', 'web', 'open_source'],
      contentLink: 'https://github.com/lpski/ticker-sentiment',
      linkLabel: 'Github'
    },
    {
      title: 'Neural Net Stock Prediction',
      color: 'mandarin',
      link: 'project/hft-trading',
      img: '/projects/lpqrd.png',
      brief: 'Novel CNN-based HFT prediction model.',
      description: 'Amet esse ad fugiat Lorem elit nostrud aliquip magna nulla nostrud elit non quis consequat.',
      tags: ['all', 'focus', 'ai', 'finance']
    }
  ];

  let active: {
    overlay?: HTMLDivElement,
    expanded: HTMLDivElement,
    original: HTMLDivElement,
  };

  const expandItem = (target: EventTarget, item: PortfolioItem) => {

    var og: HTMLDivElement = (target as Element).closest('div[data-item]');
    if (!(og instanceof HTMLDivElement)) return;


    // Create Overlay
    const overlay = document.createElement("div");
    overlay.classList.add("item-overlay");
    document.body.appendChild(overlay);
    overlay.addEventListener('click', minimize);


    // Clone selected element
    const clone = utils.cloneTarget(og);
    active = {
      expanded: clone,
      original: og,
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
    active.expanded.style.opacity = '1';

    
    // Add in child elements
    // active.expanded.append
    ReactDOM.render(ExpandedItemInfo(item), active.expanded);
  }

  const minimize = () => {
    if (!active) return;

    return new Promise((res) => {
      active.expanded.style.transform = '';
      active.overlay.style.transition = 'opacity 150ms';
      active.overlay.style.opacity = '0';

      // active.expanded.style.transition = 'all 500ms';
      active.expanded.style.opacity = '0';

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
    <div className="page">
      <Head title="Projects | LP" />

      <main className="w-full h-screen overflow-scroll flex flex-col items-center bg-black">

        <Navbar light={true} socials/>

        {/* Page Content */}
        <div className={`flex items-center flex-col w-full mt-8 px-10 text-sky`}>

          <div className="flex flex-col pb-10">
            <span className="text-4xl font-bold">woah,</span>
            <span className="text-xl font-thin text-white">check out these things I made (or contributed to)</span>
          </div>

    
          <div id="projects" className="flex flex-col items-center w-full text-white">

            <div className={`flex flex-row space-x-4 text-white font-thin controls`}>
              {categories.map(cat => (
                <span
                  key={cat.title}
                  className={'cursor-pointer pb-1 mb-2 border-transparent border-b-2 hover:border-white' + (activeCategory == cat.type ? ' border-white' : '')}
                  onClick={() => setActiveCategory(cat.type)}
                  >
                    {cat.title}
                </span>
              ))}
            </div>


            <div className={`${styles.items} mt-10`}>
              {items.filter(item => item.tags.includes(activeCategory)).map(item => (
                <div
                  data-item={item.title}
                  key={`item-${item.title}`}
                  className={`${styles.item} border border-solid border-${item.color} rounded-xl p-4`}
                  onClick={e => expandItem(e.target, item)}
                >
                  {item.img && <img className="w-16 h-16 mb-3 select-none" src={item.img} />}
                  {item.icon || ''}
                  <div className="flex flex-col select-none">
                    <span className="font-semibold title text-lg word-wrap w-full select-none">{item.title}</span>
                    <span className="font-light text-sm word-wrap select-none">{item.brief}</span>
                  </div>
                </div>
              ))}
            </div>
          
          </div>


        </div>
        
      </main>
    </div>
  )
}