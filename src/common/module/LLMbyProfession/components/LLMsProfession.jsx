import React from 'react'
import Image from '@/common/component/element/Image'
import Service from '../../Service'
import LLMsContent from './LLmsContent'
const LLMsProfession = () => {
    return (
        <div className="h-auto max-w-[1500px] flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20  overflow-hidden">
            <div className="flex justify-center m-8 relative">
                <h1 className="text-[2.5rem]   items-center text-white font-bold">
                    [Modal Name] for Product Managers

                </h1>
            </div>
            <div className="flex  w-full justify-center items-center flex-col">
                <Image
                    src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={400}
                    height={400}
                    priority
                    className="md:h-[400px] md:w-[800px] w-full rounded-3xl"
                />
            </div>
            <div className="py-10 px-10 max-md:px-5 md:px-32 text-justify">
                <p className='pb-5 leading-relaxed'>[ModelName], developed by [CompanyName], is designed to revolutionize the way Product Managers approach their roles. With advancements across various versions has continually evolved to enhance productivity, decision-making, and team collaboration for Product Managers.</p>
            </div>
            <Service />
           <LLMsContent/>
          
        </div>


    )
}

export default LLMsProfession
