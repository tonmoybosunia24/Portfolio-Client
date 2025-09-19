import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionTItle from "../../../Components/SectionTItle";
import { IoMdCall } from "react-icons/io";
import { useForm } from "react-hook-form";
import { motion } from "motion/react"

const Contact = () => {

       /* ---------------------React Hook Form------------------- */
       const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
       /* -----------------------Submit Data--------------------- */
       const onsubmit = (data) => {
              console.log(data)
       }

       return (
              /* ---------------------Contact Section--------------------- */
              <section className="section sectionPaddingBottom">
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<FaEnvelope />} title={'Contact'} subTitle={<>Feel free to reach out anytime for collaborations, opportunities, or questions <br className="hidden lg:block" /> — I’m always happy to connect and help.</>}></SectionTItle>
                     {/* -----------------Contact Section Container--------------- */}
                     <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-10 bg-dark-gray-2 rounded-xl p-5 md:p-10 lg:p-20">
                            {/* ----------------Contact Left Side--------------- */}
                            <div className="flex-2/6 text-white">
                                   <h3 className="font-bold text-6xl">Get Ready To Create Great</h3>
                                   {/* -----------------Contact Info Container-------------- */}
                                   <div className="font-Rubik space-y-2 py-5">
                                          {/* ------------------Contact Email--------------- */}
                                          <div className="flex items-center gap-2">
                                                 <div className="h-fit text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><FaEnvelope /></div>
                                                 <div>
                                                        <p>E-mail:</p>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="relative text-white hover:text-pink-red text-sm">mdtonmoybosunia24@gmail.com<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-red transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* ----------------Contact Location-------------- */}
                                          <div className="flex items-center gap-2">
                                                 <div className="h-fit text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><FaLocationDot /></div>
                                                 <div>
                                                        <p>Location:</p>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="relative text-white hover:text-pink-red text-sm">Suihari, Dinajpur, Dhaka<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-red transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* ----------------Contact Number--------------- */}
                                          <div className="flex items-center gap-2">
                                                 <div className="h-fit text-lg bg-soft-black hover:bg-pink-red text-white transform transition-colors duration-500 ease-in-out rounded-full p-2.5 cursor-pointer"><IoMdCall /></div>
                                                 <div>
                                                        <p>Location:</p>
                                                        <div className="relative w-max group cursor-pointer">
                                                               <p className="relative text-white hover:text-pink-red text-sm">01780259656<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-red transition-all duration-300 group-hover:w-full"></span></p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {/* ----------------Contact Right Side--------------- */}
                            <div className="flex-4/6 space-y-3">
                                   <h3 className="font-bold text-4xl text-white">GET IN TOUCH</h3>
                                   {/* --------------Contact Form---------------- */}
                                   <form onSubmit={handleSubmit(onsubmit)}>
                                          {/* -----------------Form Container-------------- */}
                                          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                                 {/* ---------------------Name Input-------------------- */}
                                                 <div className="form-control">
                                                        <input type="text" required {...register('name', { required: true })} placeholder="Your Name" className="w-full h-12 font-Rubik bg-dark-gray-2 text-white border border-light-black input-bordered focus:outline-0 focus:border-2 focus:border-pink-red rounded-lg px-5" />
                                                 </div>
                                                 {/* ---------------------Phone Input-------------------- */}
                                                 <div className="form-control">
                                                        <input type="tel" required {...register('number', { required: true })} placeholder="Your Number" className="w-full h-12 font-Rubik bg-dark-gray-2 text-white border border-light-black input-bordered focus:outline-0 focus:border-2 focus:border-pink-red rounded-lg px-5" />
                                                 </div>
                                                 {/* ---------------------Email Input-------------------- */}
                                                 <div className="form-control">
                                                        <input type="email" required {...register('email', { required: true })} placeholder="Your Email" className="w-full h-12 font-Rubik bg-dark-gray-2 text-white border border-light-black input-bordered focus:outline-0 focus:border-2 focus:border-pink-red rounded-lg px-5" />
                                                 </div>
                                                 {/* ---------------------Subject Input-------------------- */}
                                                 <div className="form-control">
                                                        <input type="text" required {...register('subject', { required: true })} placeholder="Subject" className="w-full h-12 font-Rubik bg-dark-gray-2 text-white border border-light-black input-bordered focus:outline-0 focus:border-2 focus:border-pink-red rounded-lg px-5" />
                                                 </div>
                                                 {/* ---------------------Subject Input-------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-2">
                                                        <textarea required {...register('description', { required: true })} className="textarea  w-full min-h-28 font-Rubik bg-dark-gray-2 text-white border border-light-black input-bordered focus:outline-0 focus:border-2 focus:border-pink-red rounded-lg px-5" placeholder="Your Message"></textarea>
                                                 </div>
                                                 {/* ---------------------Submit Button------------------- */}
                                                 <div className="form-control md:col-span-2 lg:col-span-2">
                                                        <motion.button initial="initial" whileHover="hover" className="w-full flex justify-center items-center gap-2 font-Rubik bg-pink-red text-white rounded-full text-sm py-3"
                                                        ><motion.span variants={{ initial: { opacity: 0, x: 0 }, hover: { opacity: 1, x: 20 }, }} transition={{ duration: 0.5, ease: "easeOut" }}><FaArrowRight /></motion.span><motion.span variants={{ hover: { x: 20 } }} transition={{ duration: 0.5, ease: 'easeIn' }}>Appointment Now</motion.span><motion.span variants={{ initial: { opacity: 1, x: 0 }, hover: { opacity: 0, x: 20 } }} transition={{ duration: 0.5, ease: "easeOut" }}><FaArrowRight /></motion.span></motion.button>
                                                 </div>
                                          </div>
                                   </form>
                            </div>
                     </div>
              </section>
       );
};

export default Contact;