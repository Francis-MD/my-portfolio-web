import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import adminImg from '../public/assets/projects/admin-dashboard.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.gif'
import twitchImg from '../public/assets/projects/twitch.jpg'
import projectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <projectItem
            title='Admin-Dashboard'
            backgroundImg={adminImg}
            projectUrl='/property'
            tech='Bootstrap 5'
          />
          <projectItem
            title='Crypto Landing Page'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <projectItem
            title='Movie Geeks App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <projectItem
            title='CoinMarketCap Clone'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
