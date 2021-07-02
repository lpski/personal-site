import { useState } from 'react';
import ReactDOM from 'react-dom';
import Head from '../components/head/head';
import { Navbar } from '../components/nav/navbar';
import styles from '../styles/Projects.module.scss'
import { clickEvent } from '../services/ga';

interface PortfolioItem {
  title: string;
  description: string;
  brief: string;
  border: string;
  link?: string;
  img?: string;
  icon?: JSX.Element;
  tags?: ProjectCategory[];
  contentLink?: string;
  linkLabel?: string;
  linkIcon?: JSX.Element;
  linkBg?: string;
  architecture?: string;
  involvement?: string;
  labels: string[];
  previews?: string[];
};

type ProjectCategory = 'all' | 'focus' | 'web' | 'ios' | 'open_source' | 'ai' | 'finance';



export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { type: ProjectCategory, title: string }[] = [
    { type: 'all', title: 'All' },
    { type: 'ios', title: 'iOS' },
    { type: 'web', title: 'Web' },
    { type: 'ai', title: 'Image Processing' },
    { type: 'finance', title: 'Trading' },
    { type: 'open_source', title: 'Open Source' }
  ];

  const items: PortfolioItem[] = [
    {
      title: 'Pixelect',
      border: 'border-lemon',
      link: 'project/pixelect',
      brief: 'Image aesthetics + emotion sentiment extraction application',
      description: 'Advanced image analytics service. Estimates image visual aesthetic quality and perceived emotion among other qualities.',
      img: '/projects/pixelect_alt.png',
      tags: ['all', 'focus', 'web', 'ios', 'ai'],
      contentLink: 'https://apps.apple.com/us/app/pixelect/id1572379523',
      linkLabel: 'Available on the App Store',
      linkBg: 'bg-lemon',
      architecture: `Backend consists of various AWS services: Cognito (Authentication), S3 + DynamoDB + ElasticSearch (storage), GraphQL (api), and a web service (ECS).\
      Frontend UI is entirely SwiftUI with other parts of the application being a mix of Swift, Objective-C, and C++.
      `,
      labels: ['aws', 'graphQL', 'node.js', 'iOS', 'swift', 'docker', 'terraform'],
      previews: [
        'graphics/projects/pixelect/analysis_opt.png',
        'graphics/projects/pixelect/profile_opt.png'
      ],
    },
    {
      title: 'Koi',
      border: 'border-mandarin',
      link: 'project/koi',
      img: '/projects/lpqrd.png',
      brief: 'Algorithmic Trading Platform + Web Application.',
      description: 'Developed open source algorithmic trading platform & web application. Includes stock & forex integration with Interactive Brokers. Also includes crypto integration via Kraken, Coinbase, Robinhood, or Binance.',
      tags: ['all', 'web', 'open_source', 'finance'],
      architecture: 'Python based for the trading training, decision making, and executions. Web Application is Typescript + HTML + CSS. Integrates with multiple rest apis & the Interactive Brokers websocket api.',
      labels: ['python', 'typescript', 'react.js', 'algorithmic trading'],
      contentLink: 'https://github.com/lpski/koi',
      linkLabel: 'Github',
      previews: [
        'graphics/projects/koi/interface_a.png'
      ],
    },
    {
      title: 'Emotion Guide',
      border: 'border-sky',
      link: 'project/emotion-guide',
      brief: 'Emotion-aware location reccomendation application.',
      description: 'Guides users to nearby locations which (according to analysis performed on geotagged images) provide a positive emotional response.',
      img: '/projects/emotionguide.png',
      tags: ['all', 'focus', 'ios', 'ai'],
      architecture: `Frontend was an entirely Swift-based iOS application. Backend consisted of firebase and elasticsearch integrations.`,
      labels: ['swift', 'rest api', 'elasticsearch', 'openCV', 'iOS'],
      previews: [
        'graphics/projects/emotion_guide/cluster_neg_sf.jpg',
        'graphics/projects/emotion_guide/heatmap_sf.jpg'
      ],
    },
    {
      title: 'Screen Watch',
      border: 'border-poppy',
      link: 'project/screen-watch',
      brief: 'Screen privacy monitor powered by gaze detection.',
      description: 'Maximizes screen privacy in public places by utilzing face & gaze tracking to determine if others are looking at your screen',
      img: '/projects/screenwatch.png',
      tags: ['all', 'focus', 'ai', 'open_source'],
      contentLink: 'https://github.com/lpski/no-peeking',
      linkLabel: 'Github',
      linkBg: 'bg-poppy',
      architecture: 'Swift, Objective-C, and C++ based MacOS application. Utilizes OpenCV for webcam video stream analysis + gaze detection.',
      labels: ['swift', 'openCV', 'image processing'],
    },
    {
      title: 'Ticker Sentiment',
      border: 'border-royal',
      link: 'project/ticker-sentiment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="#745296">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      brief: 'Stock news scraping, analysis and storage.',
      description: 'Automated stock+crypto news scraping service with built in sentiment analysis via NLTK. Built in ElasticSearch support as well.',
      tags: ['all', 'focus', 'finance', 'web', 'open_source'],
      contentLink: 'https://github.com/lpski/ticker-sentiment',
      linkLabel: 'Github',
      linkBg: 'bg-royal',
      architecture: 'Utlizes Python for the majority of the program. Optional backend support with ElasticSearch via a provided Dockerfile.',
      labels: ['python', 'open source', 'text sentiment analysis', 'elasticsearch', 'docker'],
    },
    {
      title: 'Neural Net Stock Trading',
      border: 'border-mandarin',
      link: 'project/hft-trading',
      img: '/projects/lpqrd.png',
      brief: 'Novel CNN-based HFT prediction model.',
      description: 'Developed novel convolutional neural network model using tensorflow for predicting short term market movements with >70% accuracy in live trading',
      tags: ['all', 'focus', 'ai', 'finance'],
      architecture: 'Largely Python-based application with heavy usage of numpy+pandas for improved performance. Conversion to Rust is ongoing.',
      labels: ['tensorflow', 'image processing', 'python', 'neural network'],
    }
  ];







  return (
    <div className="page">
      <Head title="Projects | LP" />

      <main className="w-full h-screen overflow-scroll flex flex-col items-center bg-black">

        <Navbar light={true} socials />

        {/* Page Content */}
        <div className={`flex items-center flex-col w-full mt-8 px-10 text-sky`}>

          <div className="flex flex-col pb-10">
            <span className="text-3xl font-bold">woah,</span>
            <span className="text-xl font-light text-white">check out these things I made (or contributed to)</span>
          </div>



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


          <div id="projects" className="grid gap-8 p-8 mb-20 w-full text-white max-w-6xl sm:grid-cols-1 md:grid-cols-2">

            {items.filter(item => item.tags.includes(activeCategory)).map(item => (
              <div key={item.title} className={`bg-cosmic rounded-lg p-6 transition ${styles.project} transform ease-in-out duration-200 hover:scale-101`}>
                
                {/* Tags */}
                <div className="flex flex-row space-x-2 select-none cursor-default mb-4 flex-wrap">
                  {item.labels.map((tag, i) => (
                    <>
                      <span className="text-mandarin font-semibold">{tag}</span>
                      {(i + 1< item.labels.length) && <span className="text-mandarin font-semibold">•</span>}
                    </>
                  ))}
                </div>
                  
                {/* Content */}
                <h2 className="text-white font-bold text-3xl pb-2">{item.title}</h2>
                <span className="font-light text-sm word-wrap">{item.description}</span>

                <div className="h-px w-full my-4 bg-white opacity-50" />

                <div className="">
                  <h4 className="text-white font-semibold text-md">Architecture</h4>
                  <span className="font-light text-sm word-wrap">{item.architecture}</span>
                </div>


                {item.previews && (
                  <>
                    <div className="h-px w-full my-4 bg-white opacity-50" />
    
                    <div className="flex flex-row w-full justify-around flex-wrap">
                      {item.previews.map(filename => (
                        <img
                          key={filename}
                          className="rounded-xl max-h-80 m-2 cursor-pointer"
                          src={filename}
                        />
                      ))}
                    </div>
                  </>
                )}

                {item.contentLink && (
                  <div className="flex flex-row justify-center mt-8">
                    <a href={item.contentLink} className="bg-sky rounded-xl font-medium px-6 py-2 transition-all opacity-90 hover:opacity-70">
                      {item.linkLabel}
                    </a>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

      </main>
    </div>
  )
}
