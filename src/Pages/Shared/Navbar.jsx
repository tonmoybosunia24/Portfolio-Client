import logo from '../../assets/Logo/Logo.png'
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { HiMiniBars3 } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { IoMdClose, IoMdMail } from 'react-icons/io';
import subBanner from '../../assets/Banner/SubBanner.png'
import { MdMyLocation } from 'react-icons/md';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import NavItems from '../../Components/NavItems';

const Navbar = () => {

       /* ----------------Desktop Sidebar------------------ */
       const [isSidebarOpen, setIsSidebarOpen] = useState(false);
       /* ----------------Mobile Sidebar------------------- */
       const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
       /* ------------------Scrolled State----------------- */
       const [scrolled, setScrolled] = useState(false);
       /* ---------------Handle Scroll State--------------- */
       useEffect(() => {
              const handleScroll = () => {
                     setScrolled(window.scrollY > 50);
              };
              window.addEventListener('scroll', handleScroll);
              return () => window.removeEventListener('scroll', handleScroll);
       }, []);

       return (
              /* --------------------Navbar Container-------------------- */
              <nav className={`section w-full flex justify-between items-center ${scrolled ? 'fixed top-0 bg-dark-gray-2 shadow-md duration-300 transition-all py-3 z-50' : 'bg-transparent py-5'}`}>
                     {/* -----------------Navbar Logo Container--------------- */}
                     <div className='flex items-center'> <img src={logo} alt="logo" /> <h3 className='font-Rajdhani font-bold text-3xl text-white'>Tonmoy</h3> </div>
                     {/* -----------------Navbar Links Container--------------- */}
                     <div className='hidden md:hidden lg:flex gap-5'> <NavItems></NavItems> </div>
                     {/* ---------------Navbar Controller Container------------ */}
                     <div className='flex items-center gap-2'>
                            {/* ----------------Navbar Icons Container-------------- */}
                            <div className='hidden lg:flex items-center gap-2 text-4xl'>
                                   <div className="text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><FaInstagram /></div>
                                   <div className="text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialLinkedin /></div>
                                   <div className="text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialTwitter /></div>
                                   <div className="text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialFacebook /></div>
                            </div>
                            {/* ------------------Desktop Sidebar--------------- */}
                            <div onClick={() => setIsSidebarOpen(true)} className='hidden lg:block bg-pink-red hover:bg-transparent text-xl text-white hover:text-pink-red border-2 border-pink-red p-2 rounded-full cursor-pointer'><HiMiniBars3 className='' /></div>
                            {/* ------------Desktop Sidebar Outsider------------ */}
                            {isSidebarOpen && (<div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity duration-300 cursor-crosshair"></div>)}
                            {/* ------------------Mobile Sidebar---------------- */}
                            <div onClick={() => setIsMobileMenuOpen(true)} className='lg:hidden bg-pink-red hover:bg-transparent text-xl text-white hover:text-pink-red border-2 border-pink-red rounded-full p-2 cursor-pointer'><HiMiniBars3 className='' /></div>
                            {/* -------------Mobile Sidebar Outsider------------ */}
                            {isMobileMenuOpen && (<div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity duration-300 cursor-crosshair"></div>)}
                            {/* ----------------Desktop Sidebar Container---------------- */}
                            <div className={`fixed top-0 right-0 h-screen bg-dark-gray-3 w-96 z-50 transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col p-5 space-y-5 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
                                   {/* --------------Logo & Close Container-------------- */}
                                   <div className='flex justify-between items-center'>
                                          <div className='flex items-center gap-1'> <img src={logo} alt="logo" /> <h3 className='font-Rajdhani font-bold text-white text-3xl'>Tonmoy</h3> </div>
                                          <div onClick={() => setIsSidebarOpen(false)} className='text-xl text-white bg-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer'><IoMdClose /></div>
                                   </div>
                                   {/* ----------------SubBanner Container--------------- */}
                                   <div><img className='rounded-md' src={subBanner} alt="subBanner" /></div>
                                   <h3 className='font-Rubik font-bold text-2xl text-white'>Freelancer delivering exceptional Webflow, and Next.js solutions.</h3>
                                   <p className='font-Rubik text-gray'>I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.</p>
                                   {/* --------------Desktop Sidebar Contact Info--------------- */}
                                   <div className='text-white space-y-5'>
                                          {/* ---------------Phone Container-------------- */}
                                          <div className='flex items-center gap-2'>
                                                 <div className='h-full text-2xl border border-gray rounded-sm p-2.5'><FaPhoneAlt /></div>
                                                 <div>
                                                        <h3 className='font-semibold text-pink-red'>CALL NOW</h3>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="relative font-semibold text-white">+8801780259656<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* ---------------Email Container-------------- */}
                                          <div className='flex items-center gap-2'>
                                                 <div className='h-full text-2xl border border-gray rounded-sm p-2.5'><IoMdMail /></div>
                                                 <div>
                                                        <h3 className='font-semibold text-pink-red'>MAIL US</h3>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="relative font-semibold text-white">mdtonmoybosunia24@gmail.com<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* --------------Location Container------------- */}
                                          <div className='flex items-center gap-2'>
                                                 <div className='h-full text-2xl border border-gray rounded-sm p-2.5'><MdMyLocation /></div>
                                                 <div>
                                                        <h3 className='font-semibold text-pink-red'>LOCATION</h3>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="font-semibold relative text-white">Dinajpur, Rangpur, Dhaka<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* --------------Desktop Sidebar Social Container---------- */}
                                   <div className='space-y-3'>
                                          <h3 className='font-semibold text-white text-lg'>FIND WITH ME</h3>
                                          <div className='flex items-center gap-2 text-4xl'>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><FaInstagram /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialLinkedin /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialTwitter /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialFacebook /></div>
                                          </div>
                                   </div>
                            </div>
                            {/* ------------------Mobile Sidebar Container--------------- */}
                            <div className={`fixed top-0 left-0 flex flex-col h-screen bg-dark-gray-3 w-72 md:w-96 z-50 transform transition-transform duration-300 ease-in-out shadow-lg p-3 space-y-5 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                                   {/* --------------Logo & Close Container-------------- */}
                                   <div className='flex justify-between items-center'>
                                          <div className='flex items-center gap-1'> <img src={logo} alt="logo" /> <h3 className='font-Rajdhani font-bold text-white text-3xl'>Tonmoy</h3> </div>
                                          <div onClick={() => setIsMobileMenuOpen(false)} className='text-xl bg-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full text-white p-2.5 cursor-pointer'><IoMdClose /></div>
                                   </div>
                                   {/* -------------Mobile Navbar Links Container------------- */}
                                   <div className='flex flex-col font-Rajdhani text-xl text-gray'><NavItems></NavItems></div>
                                   {/* --------------Mobile Sidebar Social Container---------- */}
                                   <div className='space-y-3'>
                                          <h3 className='font-semibold text-white'>FIND WITH ME</h3>
                                          <div className='flex items-center text-4xl gap-2'>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><FaInstagram /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialLinkedin /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialTwitter /></div>
                                                 <div className="text-lg text-white bg-soft-black hover:bg-pink-red transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><TiSocialFacebook /></div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </nav>
       );
};

export default Navbar;