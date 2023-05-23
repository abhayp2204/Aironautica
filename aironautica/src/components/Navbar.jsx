import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { applogo3, menu, close } from '../assets'
import '../css/styles.css'

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary`}
        >
            <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={applogo3} alt='logo' className='applogo'/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Abhay &nbsp;
                        <span className='sm:block hidden'> | Portfolio</span>
                    </p>
                </Link>



                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "active" : "inactive"} navitem`}
                            onClick={() => {setActive(link.title); window.scrollTo(0, 0)}}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>


                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex flex-col justify-end items-start gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "active" : "inactive"} navitem font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title); window.scrollTo(0, 0)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar