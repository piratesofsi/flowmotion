import React from 'react'
import logo from '../assets/logo.svg'
import { Github, Twitter } from "lucide-react";



const Navbar = () => {
    return (
        <header className=' w-full relative  '>
            {/* width and alightment  */} 
            <nav className='md:max-w-[700px] max-w-[300px] mx-auto flex justify-between  md:px-[2px] items-center py-6  '>


                {/* left side logo  */}
                <div className='flex justify-center gap-1 items-center transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-lg'>
                    <a href="" className='flex gap-1'>
                        <img src={logo} alt="" width="30px" />
                        <h1 className='md:text-[20px] font-bold font-geist text-[18px] '>FlowMotion</h1>
                    </a>


                </div>


                {/* right side links  */}
                <div className='flex md:gap-4  '>
                    {/* twitter */}

                    <a href="">
                        <Twitter className="md:w-10 md:h-10 w-9 h-9 p-2 rounded-full stroke-[1.5]  cursor-pointer  hover:bg-gray-100  transition" />

                    </a>
                    {/* github */}
                    <a href="">

                        <Github className="md:w-10 md:h-10 w-9 h-9 p-2 rounded-full  stroke-[1.5] cursor-pointer  hover:bg-gray-100  transition" />

                    </a>





                </div>

            </nav>



        </header>
    )
}

export default Navbar
