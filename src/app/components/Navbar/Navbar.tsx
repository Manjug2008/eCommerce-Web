"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {motion} from  "framer-motion"
import { CartIcon } from '../Icons/CartIcon'
import Menu from './Menu'


interface CustomLinkProps {
    href: string
    title: string
    className: string
  }

  interface CustomMobileLinkProps {
    href: string
    title: string
    className: string,
    toggle: ()=>void
  }


const CustomLink = (props: CustomLinkProps)=>{
    const {href, title, className} = props
    const pathName = usePathname()

    return(
        <Link href = {href} className={`${className} relative group`}>{title}
        <span className={`h-[1.5px] inline-block bg-dark absolute left-0 bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? 'w-full' : 'w-0'}`}>
            &nbsp;</span>
        
        </Link>
    )
}

const CustomMobileLink = (props: CustomMobileLinkProps)=>{
    const {href, title, className, toggle} = props
    const pathName = usePathname()
    const router = useRouter()

    const handleClick = ()=>{
        toggle()
        router.push(href)

    }
    return(
        <button className={`${className} relative group text-light my-2`} onClick={handleClick}>{title}
        <span className={`h-[1.5px] inline-block bg-light absolute left-0 bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? 'w-full' : 'w-0'}
        `}>
            &nbsp;</span>
        
        </button>
    )
}

function Navbar() {
    // const [mode, setMode] = UseThemeSwitcher()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [navbar, setNavbar] = useState<boolean>(false)

    const handleClick = ()=>{
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
        <header className={`sticky top-0 z-[100] w-full px-16 py-8 font-medium flex items-center justify-between 
        lg:px-16 md:px-12 sm:px-8 md:w-2/3 ${
            navbar
                ? "h-20 bg-primary text-secondary  md:bg-lightgray transition duration-1000 ease-in-out "
                : "h-24  bg-transparent transition-all duration-1000 ease-in-out  "
        }
        
        `
        }>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-auto text-[18px] '>
                
            </div>
            <div className='w-full flex justify-between items-center lg:hidden'>

            <nav>
              <Link href='' className='text-[18px] font-bold'> E-Commerce-site</Link>
            </nav>

            <nav>
                <CustomLink className='mr-4' href='/' title='All Products'/>
            </nav>

            <nav className='flex items-center justify-center flex-wrap gap-6 '>
            <motion.a href = '/cart'
            whileHover={{y:-3}} className='w-6' whileTap={{scale:0.9}}>
                 <CartIcon className={`${navbar ? "fill-secondary": "fill-primary"} `}/>
                 <Menu/>
                </motion.a>
            </nav>
            </div>

            {
                isOpen ?
                <motion.div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray/90 rounded-lg 
                backdrop-blur-md py-32'
                initial={{scale:0, opacity:0, x: '-50%', y: '-50%'}}
                animate={{scale:1, opacity:1}}
                >
                <nav className='flex flex-col items-center justify-center'>
                    <CustomMobileLink className='' href='/' title='All Products' toggle={handleClick}/>
                    </nav>
    
                <nav className='flex items-center justify-center flex-wrap gap-6 mt-2 sm:gap-1'>
                <motion.a href = '/cart'
                 whileHover={{y:-3}} className='w-6' whileTap={{scale:0.9}}>
                 <CartIcon className=''/>
                 <Menu/>
                </motion.a>
                
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
