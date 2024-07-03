import ModelsPage from '@/common/module/ModelsPage'
import React from 'react'


export const metadata = {
  title: 'ModelPage - Teaser',
  description: 'ModelPage',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <ModelsPage/>
    </div>
  )
}

export default page
