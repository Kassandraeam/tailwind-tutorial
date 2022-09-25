import React from 'react'
import bgImg from '../../assets/design-and-development-process.png';
import { useRef } from 'react';
import 'animate.css';

const About = () => {

    const about = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (

        <div className='animate__fadeInUp'>
            <div>
    
                <div className='flex flex-col'>
    
                    <p className='text-3xl font-semibold text-[#4F45E4] ml-20'>// ABOUT</p>
    
                    <div className='m-10'>
    
                        <div className='flex flex-col mx-10'>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>

    )
}

export default About