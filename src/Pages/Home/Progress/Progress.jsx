import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "motion/react"
import CountUp from 'react-countup';
import { useState } from 'react';
import { FaBootstrap, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import SectionTItle from '../../../Components/SectionTItle';
import { GrServices } from "react-icons/gr";

const Progress = () => {

       const [htmlValue, setHtmlValue] = useState(0);
       const [cssValue, setCssValue] = useState(0);
       const [jsValue, setJsValue] = useState(0);
       const [reactValue, setReactValue] = useState(0);
       const [tailwindValue, setTailwindValue] = useState(0);
       const [bootstrapValue, setBootstrapValue] = useState(0);
       const [nodeValue, setNodeValue] = useState(0);
       const [expressValue, setExpressValue] = useState(0);
       const [mongodbValue, setMongodbValue] = useState(0);

       return (
              /* -----------------Progress Bar Section---------------- */
              <section className='section sectionPaddingBottom'>
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<GrServices />} title={'Progress'} subTitle={<>Tracking my growth, consistency, and expertise across different technologies as I continue <br className='hidden lg:block' /> to improve and build modern projects.</>}></SectionTItle>
                     {/* ---------------Progress Bar Container------------ */}
                     <div className='w-fit lg:w-5/6 flex flex-wrap items-center justify-center gap-10 mx-auto'>
                            {/* ----------------Progress Ber For Html----------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setHtmlValue(80), 100) }} onViewportLeave={() => setHtmlValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={htmlValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={htmlValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><FaHtml5 className='text-pink-red' /> HTML</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ----------------Progress Ber For Css----------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setCssValue(70), 100) }} onViewportLeave={() => setCssValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={cssValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={cssValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><IoLogoCss3 className='text-pink-red' /> CSS</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For Javascript---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setJsValue(80), 100) }} onViewportLeave={() => setJsValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={jsValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={jsValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><BiLogoJavascript className='text-pink-red' /> JS</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For React---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setReactValue(90), 100) }} onViewportLeave={() => setReactValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={reactValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={reactValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><FaReact className='text-pink-red' />REACT</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For Tailwind---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setTailwindValue(85), 100) }} onViewportLeave={() => setTailwindValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={tailwindValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={tailwindValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><SiTailwindcss className='text-pink-red' />TAILWIND</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For Bootstrap---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setBootstrapValue(75), 100) }} onViewportLeave={() => setBootstrapValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={bootstrapValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={bootstrapValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><FaBootstrap className='text-pink-red' />BOOTSTRAP</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For Node.js---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setNodeValue(25), 100) }} onViewportLeave={() => setNodeValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={nodeValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={nodeValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><FaNode className='text-pink-red' />NODE</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For Express.js---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setExpressValue(50), 100) }} onViewportLeave={() => setExpressValue(0)} className='w-32 h-32'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={expressValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={expressValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><SiExpress className='text-pink-red' />EXPRESS</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                            {/* ---------------Progress Ber For MongoDb---------------- */}
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} onViewportEnter={() => { setTimeout(() => setMongodbValue(70), 100) }} onViewportLeave={() => setMongodbValue(0)} className='w-32 h-32 hidden lg:block'>
                                   <CircularProgressbarWithChildren styles={buildStyles({ pathColor: '#FF014F', trailColor: '#FF494A29', backgroundColor: '#0F0F0F', pathTransitionDuration: 2 })} value={mongodbValue}><div className='font-bold text-xl text-white text-center'><motion.strong><CountUp className='text-2xl text-pink-red' duration={2} enableScrollSpy start={0} end={mongodbValue} suffix='%' /></motion.strong><h3 className='flex justify-center items-center gap-1 text-base'><SiMongodb className='text-pink-red' />MONGO</h3></div></CircularProgressbarWithChildren>
                            </motion.div>
                     </div>
              </section>
       );
};

export default Progress;