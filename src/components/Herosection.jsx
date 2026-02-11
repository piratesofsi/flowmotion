import React from 'react'
import { Copy } from 'lucide-react'
import { Eye } from 'lucide-react'

const Herosection = () => {
    return (
        <section className='min-h-screen max-w-[600px] mx-auto py-20 mt-11' >
            {/* main content */}

            <div className='flex flex-col justify-center items-center'>
                {/* main big text + small text */}
                <h1 className='font-inter  text-6xl text-center font-semibold '>

                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500  bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        Craft Smooth
                    </span>
                    {/* bg-gradient-to-r created a curtain in right of
                    colors and bg-clip-text only the colors show from 
                    the text only and text-tranparent you know 
                    and animate gradient class js animates it  */}
                </h1>

                <h2 className='text-5xl text-center font-semibold font-geist pb-9 '>
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        UI Motion
                    </span>


                </h2>
                {/* description  */}
                <p className='w-[540px] font-inter text-center text-[18px]  text-gray-600'>Production-ready motion patterns with raw CSS and animation logic included.
                    Copy, tweak, and ship effects like typewriters, gradients, loaders, and micro-interactions.</p>

                {/* div with 2 cards  */}
                <div className='flex  justify-center items-center gap-4 pt-12 w-[500px]'>

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
                    {/* first card  */}
                 
                      {/* first card  */}
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
                <div> </div>
            </div>

        </section >
    )
}

export default Herosection
