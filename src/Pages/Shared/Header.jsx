import Navbar from './Navbar';
import headerBackground from '../../assets/Banner/HeaderBanner.jpg'
import profileImage from '../../assets/ProfileImage/ProfileImage.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaArrowRight } from 'react-icons/fa';
import { easeInOut, motion } from "motion/react"

const Header = () => {
       return (
              /* ---------------------Header Container-------------------- */
              <header className='w-full lg:max-h-screen bg-center bg-no-repeat bg-cover overflow-hidden scroll-hide' style={{ backgroundImage: `url(${headerBackground})` }}>
                     {/* ----------------Navbar----------------- */}
                     <Navbar />
                     {/* --------------Header Section Container----------- */}
                     <div className='section h-full flex flex-col md:flex-row lg:flex-row gap-10 text-white pt-10 md:pt-0 lg:pt-0'>
                            {/* --------------Header Left Container--------------- */}
                            <div className='flex-1 my-auto space-y-3'>
                                   {/* -----------Header Left Title---------- */}
                                   <h3><span className='font-bold text-2xl'>HELLO</span> <br /> <span className='font-bold text-5xl md:text-6xl lg:text-7xl'>i’m Tonmoy</span> <br /> <span className='font-bold text-pink-red text-4xl md:text-4xl lg:text-5xl'><Typewriter loop={false} cursor words={['Front-End Developer', 'Web Developer', 'Web Designer']}></Typewriter></span></h3>
                                   {/* -----------Header Left Description---------- */}
                                   <p className='font-Rubik text-gray'>I’m a passionate Front-End Developer specialized in building modern, responsive, and user-friendly web applications. I love turning ideas into real digital experiences.</p>
                                   {/* -----------Header Left Button---------- */}
                                   <motion.button initial="initial" whileHover="hover" className="flex justify-center items-center text-center gap-2 font-Rubik bg-pink-red text-white rounded-full text-sm px-7 py-3"><motion.span variants={{ initial: { opacity: 0, x: -20 }, hover: { opacity: 1, x: 15 }, }} transition={{ duration: 0.5, ease: "easeOut" }}><FaArrowRight /></motion.span><motion.span variants={{ initial: { x: -10 }, hover: { x: 10 } }} transition={{ duration: 0.5, ease: 'easeIn' }}>View Resume</motion.span><motion.span variants={{ initial: { opacity: 1, x: -10 }, hover: { opacity: 0, x: 20 } }} transition={{ duration: 0.5, ease: "easeOut" }}><FaArrowRight /></motion.span></motion.button>
                            </div>
                            {/* --------------Header Right Container--------------- */}
                            <div className='flex-1 relative h-full flex flex-col justify-center items-center'>
                                   {/* ---------------Header Right Upper Text---------------- */}
                                   <motion.h3 animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: easeInOut }} className='absolute top-2/5 font-bold transform text-4xl lg:text-6xl z-0'>WEB DEVELOPER</motion.h3>
                                   {/* ---------------Header Right Profile Image------------- */}
                                   <img className='aspect-[1/1] border-red h-full object-bottom z-20' src={profileImage} alt="profileImage" />
                                   {/* ---------------Header Right Bottom Text---------------- */}
                                   <motion.h3 animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: easeInOut }} className='absolute bottom-1/12 font-bold text-transparent text-stroke text-4xl lg:text-6xl z-30'>WEB DESIGNER</motion.h3>
                            </div>
                     </div>
              </header>
       );
};

export default Header;