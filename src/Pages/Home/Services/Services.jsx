import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { FaRegLightbulb } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Services = () => {
       return (
              /* -------------------Services Section------------------ */
              <section className="section sectionPadding">
                     {/* ---------------Service Section Container------------- */}
                     <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5">
                            {/* ----------------Web Design Service--------------- */}
                            <div className="w-full flex flex-col gap-5 justify-center items-center text-center border border-rose-red rounded-xl py-7">
                                   <LuPencilRuler className="text-pink-red text-6xl md:text-4xl lg:text-6xl" />
                                   <div>
                                          <div className="relative group">
                                                 <h3 className="font-bold text-2xl md:text-xl lg:text-2xl text-white hover:text-pink-red">Web Design</h3>
                                                 <div className="w-0 h-0.5 absolute left-0 bottom-0 bg-pink-red transition-all duration-300 group-hover:w-full"></div>
                                          </div>
                                          <p className="font-Rubik text-gray text-lg">10 Projects</p>
                                   </div>
                            </div>
                            {/* ---------------Ui/Ux Design Service-------------- */}
                            <div className="w-full flex flex-col gap-5 justify-center items-center text-center border border-rose-red rounded-xl py-7">
                                   <FontAwesomeIcon className="text-pink-red text-6xl md:text-4xl lg:text-6xl" icon={faBezierCurve} />
                                   <div>
                                          <div className="relative group">
                                                 <h3 className="font-bold text-2xl md:text-xl lg:text-2xl text-white hover:text-pink-red">Ui/Ux Design</h3>
                                                 <div className="w-0 h-0.5 absolute left-0 bottom-0 bg-pink-red transition-all duration-300 group-hover:w-full"></div>
                                          </div>
                                          <p className="font-Rubik text-gray text-lg">12 Projects</p>
                                   </div>
                            </div>
                            {/* ---------------Web Research Service-------------- */}
                            <div className="w-full flex flex-col gap-5 justify-center items-center text-center border border-rose-red rounded-xl py-7">
                                   <FaRegLightbulb className="text-pink-red text-6xl md:text-4xl lg:text-6xl" />
                                   <div>
                                          <div className="relative group">
                                                 <h3 className="font-bold text-2xl md:text-xl lg:text-2xl text-white hover:text-pink-red">Web Research</h3>
                                                 <div className="w-0 h-0.5 absolute left-0 bottom-0 bg-pink-red transition-all duration-300 group-hover:w-full"></div>
                                          </div>
                                          <p className="font-Rubik text-gray text-lg">15 Projects</p>
                                   </div>
                            </div>
                            {/* ----------------Marketing Service--------------- */}
                            <div className="w-full flex flex-col gap-5 justify-center items-center text-center border border-rose-red rounded-xl py-7">
                                   <FontAwesomeIcon className="text-pink-red text-6xl md:text-4xl lg:text-6xl" icon={faEnvelope}></FontAwesomeIcon>
                                   <div>
                                          <div className="relative group">
                                                 <h3 className="font-bold text-2xl md:text-xl lg:text-2xl text-white hover:text-pink-red">Marketing</h3>
                                                 <div className="w-0 h-0.5 absolute left-0 bottom-0 bg-pink-red transition-all duration-300 group-hover:w-full"></div>
                                          </div>
                                          <p className="font-Rubik text-gray text-lg">20 Projects</p>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};

export default Services;