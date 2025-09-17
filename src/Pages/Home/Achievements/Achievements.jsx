import CountUp from 'react-countup';
import { motion } from "motion/react"
import SectionTItle from '../../../Components/SectionTItle';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
       return (
              /* --------------------Achievements Section------------------ */
              <section className="section sectionPaddingBottom text-white">
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<FaTrophy />} title={'Achievements'} subTitle={<>A reflection of my journey, highlighting years of experience, completed projects, <br className="hidden lg:block" /> client satisfaction, and valuable growth.</>}></SectionTItle>
                     {/* --------------Achievements Section Container----------- */}
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                            {/* ---------------Achievements Section Left Side-------------- */}
                            <div style={{ background: "linear-gradient(to right bottom, #161415, #2b1720, #411727, #59142b, #700d2b)" }} className="flex-4/9 rounded-xl p-10 md:p-10 lg:p-12">
                                   <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                                          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeIn' }} viewport={{ once: false }} className="font-bold text-9xl text-pink-red"><CountUp duration={2} enableScrollSpy start={50} end={2} /></motion.h3>
                                          <h3 className="font-bold text-5xl">Years Of <br /> Experience</h3>
                                   </div>
                                   <p className="font-semibold">Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                            </div>
                            {/* ---------------Achievements Section Right Side-------------- */}
                            <div className="flex-5/9 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                   {/* ------------------Project Completed---------------- */}
                                   <div className="flex flex-col justify-center items-center bg-dark-gray-2 hover:border-b-4 border-pink-red rounded-xl py-10 md:py-10 lg:py-0">
                                          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeIn' }} viewport={{ once: false }} className="font-bold text-5xl md:text-4xl lg:text-6xl"><CountUp duration={2} enableScrollSpy start={50} end={10} /> +</motion.h3>
                                          <p className="font-Rubik font-medium text-gray text-sm md:text-xs lg:text-sm">Project Complete</p>
                                   </div>
                                   {/* --------------------Natural Products----------------- */}
                                   <div className="flex flex-col justify-center items-center bg-dark-gray-2 hover:border-b-4 border-pink-red rounded-xl py-10 md:py-10 lg:py-0">
                                          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeIn' }} viewport={{ once: false }} className="font-bold text-5xl md:text-4xl lg:text-6xl"><CountUp duration={2} enableScrollSpy start={50} end={15} /> +</motion.h3>
                                          <p className="font-Rubik font-medium text-gray text-sm md:text-xs lg:text-sm">Natural Products</p>
                                   </div>
                                   {/* --------------------Clients Reviews------------------ */}
                                   <div className="flex flex-col justify-center items-center bg-dark-gray-2 hover:border-b-4 border-pink-red rounded-xl py-10 md:py-10 lg:py-0">
                                          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeIn' }} viewport={{ once: false }} className="font-bold text-5xl md:text-4xl lg:text-6xl"><CountUp duration={2} enableScrollSpy start={50} end={20} /> +</motion.h3>
                                          <p className="font-Rubik font-medium text-gray text-sm md:text-xs lg:text-sm">Clients Reviews</p>
                                   </div>
                                   {/* --------------------Satisfied Clients----------------- */}
                                   <div className="flex flex-col justify-center items-center bg-dark-gray-2 hover:border-b-4 border-pink-red rounded-xl py-10 md:py-10 lg:py-0">
                                          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeIn' }} viewport={{ once: false }} className="font-bold text-5xl md:text-4xl lg:text-6xl"><CountUp duration={2} enableScrollSpy start={50} end={25} /> +</motion.h3>
                                          <p className="font-Rubik font-medium text-gray text-sm md:text-xs lg:text-sm">Satisfied Client</p>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default Achievements;