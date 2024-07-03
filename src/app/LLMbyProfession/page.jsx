import LLMsProfession from '@/common/module/LLMbyProfession'
import React from 'react'


export const metadata = {
  title: 'LLMsProfession - Teaser',
  description: 'LLMsProfession',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <LLMsProfession/>
    </div>
  )
}

export default page
