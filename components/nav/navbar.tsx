import Link from 'next/link';
import styles from './navbar.module.css';

interface NavbarProps {
  light: boolean
  socials: boolean
}

export const Navbar = ({ light = false, socials = true }: NavbarProps) => (
  <div className="flex flex-row justify-between items-center h-12 px-4 w-full py-4">
    
    <Link href="/">
      <img className="w-10 h-10 cursor-pointer" src={`/logos/v1${light ? '-light' : ''}.svg`} alt="LP" />
    </Link>

    {socials && (
    <div className="flex flex-row items-center space-x-2">
      <Link href="https://www.linkedin.com/lukeporupski">
        <svg className="h-8 w-8 cursor-pointer transition-opacity hover:opacity-75" viewBox="0 0 128 128">
          <path d="M106.09,20.5a1.41,1.41,0,0,1,1.41,1.41v84.19a1.41,1.41,0,0,1-1.41,1.41H21.91a1.41,1.41,0,0,1-1.41-1.41V21.91a1.41,1.41,0,0,1,1.41-1.41h84.19m0-6.5H21.91A7.91,7.91,0,0,0,14,21.91v84.19A7.91,7.91,0,0,0,21.91,114h84.19a7.91,7.91,0,0,0,7.91-7.91V21.91A7.91,7.91,0,0,0,106.09,14Z" fill={light ? '#fff' : '#000'}/>
          <rect height="41.73" width="11.73" x="37.27" y="50.4" fill={light ? '#fff' : '#000'}/>
          <path d="M77.23,50.4C67.18,50.4,67,56.21,67,56.61V50.4H55V92.13H67V68.31c0-1.86.55-5.86,6.23-5.86s5.63,5.73,5.63,5.73v24H90.73v-26C90.73,53.85,84,50.4,77.23,50.4Z" fill={light ? '#fff' : '#000'}/>
          <circle cx="43.13" cy="41.73" r="5.86" fill={light ? '#fff' : '#000'}/>
        </svg>
      </Link>

      <Link href="https://www.github.com/lpski">
        <svg className="h-6 w-6 cursor-pointer transition-opacity hover:opacity-75" version="1.0" viewBox="0 0 32 32">
          <path
            clip-rule="evenodd"
            d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
            fill={light ? '#fff' : '#000'}
            fill-rule="evenodd"
          />
        </svg>
      </Link>
    </div>
    )}
  </div>
);
