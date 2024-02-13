"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { CartIcon } from '../Icons/CartIcon'
import Menu from './Menu'



const MotionLink = motion(Link)


function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [navbar, setNavbar] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const changeNavbarBg = () => {
        if (window.scrollY > 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    useEffect(() => {
        document.addEventListener("scroll", changeNavbarBg);

        return () => {
            document.removeEventListener("scroll", changeNavbarBg);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-[100] w-full px-16 py-2 font-medium flex items-center justify-between 
        lg:px-16 md:px-12 sm:px-8 md:w-1/3 md:h-5 ${navbar
                ? "h-20 bg-primary text-secondary  md:bg-transparent transition duration-1000 ease-in-out "
                : "h-24 bg-navBg md:bg-transparent md:mt-4 transition-all duration-1000 ease-in-out"} `
        }>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>

                <nav>
                    <Link href='/' className='text-[18px] font-bold'>

                        <motion.img
                            src="/images/shopping.png"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            alt="e-commerce"
                            className="w-16, h-16 rounded-full"
                        />
                    </Link>



                </nav>

                <nav>
                    <div className='flex items-center justify-center mt-2'>

                        <MotionLink href='/' className='w-20 h-20 bg-navyBlue text-light flex 
            items-center justify-center rounded-full text-[18px] font-bold 
            border border-solid border-btnColor dark:border-light'
                            whileHover={{ scale: 1.2 }}>
                            Home
                        </MotionLink>

                    </div>
                </nav>

                <nav className='flex items-center justify-center flex-wrap gap-6 '>
                    <motion.a href='/cart'
                        whileHover={{ y: -3 }} className='w-8' whileTap={{ scale: 0.9 }}>
                        <strong className="relative inline-flex items-center ">
                            <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full flex justify-center items-center items"><span><Menu /></span></span>
                            <span className=""> <CartIcon className={`${navbar ? "fill-secondary" : "fill-primary"} h-8 w-8`} /> </span>
                        </strong>

                    </motion.a>


                </nav>
            </div>

            {
                isOpen ?
                    <motion.div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lightgray rounded-lg 
                backdrop-blur-md py-32'
                        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <nav className='flex flex-col items-center justify-center'>
                            {/* <CustomMobileLink className='' href='/' title='Home' toggle={handleClick} /> */}
                            <div className='flex items-center justify-center mt-2'>

                                <a href='/' className='w-20 h-20 bg-navyBlue text-light flex 
                                 items-center justify-center rounded-full text-[18px] font-bold 
                                 border border-solid border-btnColor dark:border-light'>
                                    Home
                                </a>

                            </div>
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap gap-6 mt-2 sm:gap-1'>
                            <a href='/cart' className='w-10'>
                                <strong className="relative inline-flex items-center">
                                    <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full flex justify-center items-center items"><span><Menu /></span></span>
                                    <span> <CartIcon className={`${navbar ? "fill-secondary" : "fill-primary"} h-10 w-10`} /> </span>
                                </strong>

                            </a>



                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%] md:left-[75%]'>
                {/* <Logo/> */}

            </div>

        </header>

    )
}

export default Navbar
