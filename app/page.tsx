'use client'
import { motion } from 'framer-motion'
import { Highlight, HeroHighlight } from '@/components/hero'

const Home = () => {
  return (
    <HeroHighlight className='overflow-hidden'>
      <div className="flex flex-row h-screen w-screen text-black">
        <div className="flex flex-wrap w-2/3 justify-center items-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Link your{' '}
            <Highlight className="text-black dark:text-white">
              Apparel
            </Highlight>{' '}
            to your story with custom QR codes.
          </motion.h1>
        </div>
        <div className="w-1/3">
          <div className="flex justify-center items-center h-full w-full">
            3d model
          </div>
        </div>
      </div>
    </HeroHighlight>
  )
}

export default Home
