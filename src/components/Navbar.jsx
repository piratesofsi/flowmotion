import React from 'react'
import logo from '../assets/logo.svg'
import { Github, Twitter } from "lucide-react";



const Navbar = () => {
    return (
        <header className=' w-full relative  '>
            {/* width and alightment  */}
            <nav className='max-w-[700px] mx-auto flex justify-between  px-[2px] items-center py-6'>


                {/* left side logo  */}
                <div className='flex justify-center gap-1 items-center'>
                    <a href="" className='flex gap-1'>
                        <img src={logo} alt="" width="30px" />
                        <h1 className='text-[20px] font-bold font-geist'>FlowMotion</h1>
                    </a>


                </div>


                {/* right side links  */}
                <div className='flex gap-4 '>
                    {/* twitter */}

                    <a href="">
                        <Twitter className="w-10 h-10 p-2 rounded-full stroke-[1.5]  cursor-pointer bg-gra hover:bg-gray-100  transition" />

                    </a>
                    {/* github */}
                    <a href="">

                        <Github className="w-10 h-10 p-2 rounded-full  stroke-[1.5] cursor-pointer bg-gra hover:bg-gray-100  transition" />

                    </a>





                </div>

            </nav>



        </header>
    )
}

export default Navbar
