import React from 'react'
import { Copy } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Github } from 'lucide-react'
import { CodeXml } from "lucide-react";


const Herosection = () => {
    return (
        <section className='min-h-screen max-w-[600px] mx-auto py-20  md:mt-11' >
            {/* main content */}

            <div className='flex flex-col justify-center items-center'>
                {/* main big text + small text */}
                <h1 className='font-inter  md:text-6xl text-[36px] text-center font-semibold '>

                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500  bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        Craft Smooth
                    </span>
                    {/* bg-gradient-to-r created a curtain in right of
                    colors and bg-clip-text only the colors show from 
                    the text only and text-tranparent you know 
                    and animate gradient class js animates it  */}
                </h1>

                <h2 className='md:text-5xl text-[27px] text-center font-semibold font-geist pb-9 '>
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        UI Motion
                    </span>


                </h2>
                {/* description  */}
                <p className='md:w-[540px] w-[300px] text-[16px] md:pb-8 pb-8  font-inter text-center md:text-[18px]  text-gray-600'>Production-ready motion patterns with raw CSS and animation logic included.
                    Copy, tweak, and ship effects like typewriters, gradients, loaders, and micro-interactions.</p>

                {/* div with 2 cards  */}
                <div className='flex md:flex-row flex-col  justify-center items-center gap-4 pt-12 md:w-[500px] '>

                    {/* first card  */}
                    <div className='px-5 py-[14px] border flex justify-between items-center gap-4  w-full rounded-2xl border-gray-100 shadow-lg '>
                        {/* left side copy icon  */}
                        <div className='w-[20%] h-full p-2   flex justify-center items-center
                        bg-blue-100 rounded-md'>
                            <Copy className='w-[19px] h-[19px] text-blue-500' ></Copy>

                        </div>
                        {/* right side  */}
                        <div className='flex flex-col w-[90%] pr-2'>
                            {/* h2 */}
                            <h4 className='text-[13px] font-bold font-inter'>One-Click Copy</h4>
                            {/* h4 */}
                            <h4 className='text-[13px] font-medium text-gray-500 '>Ready-to-use  codes</h4>
                        </div>


                    </div>
                    {/* second card  */}
                  
                 
                    <div className='px-5 py-[14px] border border-gray-100 flex justify-between items-center gap-4  w-full rounded-2xl shadow-lg  '>
                        {/* left side copy icon  */}
                        <div className='w-[20%]  h-full p-2 flex justify-center items-center
                        bg-blue-100 rounded-md p-1'>
                            <Eye className='w-[19px] h-[19px]'></Eye>

                        </div>
                        {/* right side  */}
                        <div className='flex flex-col w-[90%] pr-2 font-inter '>
                            {/* h2 */}
                            <h4 className='text-[13px] font-bold '>Live Preview</h4>
                            {/* h4 */}
                            <h4 className='text-[12px] font-medium text-gray-500 '>See motion in action</h4>
                        </div>


                    </div>
                     </div>

                {/* div with contribute here and browse animations */}
                 <div className='flex md:flex-row flex-col  justify-between items-center gap-4 pt-12 md:w-[400px] w-[260px] md:pb-0  '>

                    {/* first card  */}
                    <a href='' className='px-1 py-[8px] bg-black border flex justify-center items-center gap-1  w-full rounded-[10px] border-gray-100 shadow-lg '>
                        {/* left side github icon  */}

                        <Github width="16px" className='text-white'></Github>
                       
                        {/* right side  */}
                        <div className='text-white font-semibold font-inter text-[15px] '>
                            Contribute here~
                        </div>


                    </a>
                    {/* second card  */}
                      
                    <a href='' className='px-1 py-[8px] hover:bg-gray-100 duration-200 transition-all  border flex justify-center items-center gap-1  w-full rounded-[10px] border-gray-100 shadow-lg '>
                        {/* left side github icon  */}

                        <CodeXml width="16px" className='text-black'></CodeXml>
                       
                        {/* right side  */}
                        <div className='text-black font-semibold font-inter '>
                            Browse Motion
                        </div>


                    </a>
                 
                   
                     </div>
            </div>

        </section >
    )
}

export default Herosection
