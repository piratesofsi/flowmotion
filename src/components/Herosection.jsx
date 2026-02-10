import React from 'react'

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
                <div> </div>

                {/* div with contribute here and browse animations */}
                <div> </div>
            </div>

        </section >
    )
}

export default Herosection
