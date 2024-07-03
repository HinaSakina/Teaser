"use client";
import React from 'react'
import Solution from '../../Solution'
import Service from '../../Service'
import Image from '@/common/component/element/Image'
import FaqAccordian from '@/common/component/element/FaqAccordian'
import { usePathname } from 'next/navigation';
import ComponentTransition from '@/common/component/element/ComponentTransition'
import { ServiceItem } from '@/common/constant/Service';
import CardImage from '../../../../../public/cardImage.png'
const Professionpage = () => {
  const pathname = usePathname();
  const profession = ServiceItem.find((item) => `/profession/${item.slug}` === pathname);

  return (
    <div>
        <div className="flex mt-32  w-full justify-center items-center flex-col">
        <Image
          src='https://images.unsplash.com/photo-1618005198920-f0cb6201c115?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          width={400}
          height={400}
          priority
          className="md:h-[300px] md:w-[700px] w-full rounded-3xl"
        />
      </div>
      <ComponentTransition className="flex flex-col md:flex-row items-center justify-center  pb-10 mt-10 px-6 md:px-10  ">
        <div className="w-full md:w-[68%] px-5 lg:px-10 py-5  mb-5 md:mb-0">
          <h1 className="text-2xl font-bold py-2 ">
          [{profession.title}]
          </h1>
          <p className="text-base  mt-5 leading-relaxed">
          To enhance effectiveness and efficiency,  [{profession.title}] can leverage AI chat products centralizing multiple large language models (LLMs) like Gemini, Mistral, Llama, GPT, and Claude. These AI assistants provide instant access to  [{profession.title}] knowledge bases, and documents, answer complex questions, and offer data-driven insights for strategy. By utilizing these LLMs' advanced natural language processing and generation capabilities,  [{profession.title}] can streamline processes, improve workflow and communication, and focus on high-value strategic initiatives driving organizational success.          </p>
        </div>
      </ComponentTransition>
      <Solution/>
      <div>
        <h1 className="text-4xl md:text-4xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
        Explore LLMs for  [{profession.title}]
          </h1>
        <Service/>
       

      </div>
      <div className="px-16 justify-center">
              <Image
                src={CardImage}
                alt=""
                width={400}
                height={400}
                loading="lazy"
                className=" w-full "
              />
            </div>
      <div className="p-6 md:p-10 flex justify-center flex-wrap relative">
        <div className="absolute z-[-9] glowbg w-full md:w-[600px] h-[400px] top-[50px]"></div>
        <FaqAccordian />
      </div>
    </div>
  )
}

export default Professionpage
