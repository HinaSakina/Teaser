import React from 'react'
import FaqAccordian from '@/common/component/element/FaqAccordian'
import Solution from '../../Solution'
import Image from '@/common/component/element/Image'
import ModelContent from './ModelContent'
const ModelsPage = () => {
  return (
    <div>
      <div className='mt-32'>
        <div className="flex  2  w-full justify-center items-center flex-col">
          <Image
            src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={400}
            height={400}
            priority
            className="md:h-[400px] md:w-[800px] w-full rounded-3xl"
          />
        </div>
        <ModelContent />
        <Solution />
      
      </div>
      <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
        <FaqAccordian />
      </div>
    </div>
  )
}

export default ModelsPage
