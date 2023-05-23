import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { applogo3, menu, close } from '../assets'
import '../css/styles.css'

const Navbar = () => {
    const [active, setActive] = useState("")

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
                    <p className='text-white text-[18px] font-bold cursor-pointer'>Abhay <span className='sm:block hidden'> | Portfolio</span></p>
                </Link>



                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "active" : "inactive"} navitem`}
                            onClick={() => {setActive(link.title); window.scrollTo(0, 0)}}
                        >
                            {console.log('active = ', active)}
                            {console.log('title = ', link.title)}
                            {console.log(active === link.title)}
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar