import { FaGraduationCap } from "react-icons/fa";
import SectionTItle from "../../../Components/SectionTItle";

const Education = () => {
       return (
              /* -------------------Education Section----------------------- */
              <section className="section sectionPaddingBottom">
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<FaGraduationCap />} title={'Education'} subTitle={<>Highlighting my academic journey, qualifications, achievements, and the valuable knowledge that has <br className="hidden lg:block" /> shaped my growth, skills, and career path.</>}></SectionTItle>
                     {/* --------------Section Container------------ */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-white">
                            {/* ------------------Honours------------------- */}
                            <div className="bg-dark-gray-2 rounded-xl hover:border-l-2 border-pink-red space-y-1.5 px-5 py-7">
                                   <h3 className="font-bold text-xl md:text-xl lg:text-2xl">Bachelor’s Degree (ENGLISH)</h3>
                                   <p className="font-Rubik text-lg">Kader Boksha Memorial College, Dinajpur</p>
                                   <p className="font-Rubik text-gray">2021-2026</p>
                            </div>
                            {/* ----------------Hsc----------------- */}
                            <div className="bg-dark-gray-2 rounded-xl hover:border-l-2 border-pink-red space-y-1.5 px-5 py-7">
                                   <h3 className="font-bold text-xl md:text-xl lg:text-2xl">Higher Secondary Certificate (HSC)</h3>
                                   <p className="font-Rubik text-lg">Holy Land College, Dinajpur</p>
                                   <p className="font-Rubik text-gray">2018-2020</p>
                            </div>
                            {/* ----------------Ssc----------------- */}
                            <div className="bg-dark-gray-2 rounded-xl hover:border-l-2 border-pink-red space-y-1.5 px-5 py-7">
                                   <h3 className="font-bold text-xl md:text-xl lg:text-2xl">Secondary School Certificate (SSC)</h3>
                                   <p className="font-Rubik text-lg">Tepriganj Adarsha B.L High Scrool, Panchagarh</p>
                                   <p className="font-Rubik text-gray">2016-2018</p>
                            </div>
                            {/* ----------------Jsc----------------- */}
                            <div className="bg-dark-gray-2 rounded-xl hover:border-l-2 border-pink-red space-y-1.5 px-5 py-7">
                                   <h3 className="font-bold text-xl md:text-xl lg:text-2xl">Junior School Certificate (SSC)</h3>
                                   <p className="font-Rubik text-lg">Tepriganj Adarsha B.L High Scrool, Panchagarh</p>
                                   <p className="font-Rubik text-gray">2014-2015</p>
                            </div>
                     </div>
              </section>
       );
};

export default Education;