import Marquee from "react-fast-marquee";
import { FaBootstrap, FaChartLine, FaCss3, FaGitAlt, FaGithub, FaGlobeAmericas, FaHtml5, FaNode, FaReact, FaTools } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi, TbBrandFramerMotion, TbBrandRedux, TbBrandThreejs, TbBrandVercel, TbTransform } from "react-icons/tb";
import { MdDevices, MdOutlineAccessibilityNew } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiFirebase, SiMongodb, SiPostman, SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import SectionTItle from "../../../Components/SectionTItle";

const SkillsMarquee = () => {
       return (
              <section className="section sectionPaddingBottom space-y-3">
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<FaTools />} title={'My Skills'} subTitle={<>A showcase of my knowledge in web development, tools, and libraries that empower me to <br className="hidden lg:block" /> build modern, scalable, and effective solutions.</>}></SectionTItle>
                     {/* ------------------Core Concept Marquee-------------- */}
                     <Marquee pauseOnHover={true} speed={20} gradient={true} gradientColor="#0F0F0F" gradientWidth={50}>
                            <div className="flex gap-5 text-white">
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaHtml5 /> </span>Html</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaCss3 /> </span>Css</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><IoLogoJavascript /> </span>JavaScript (Es6+)</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><BiLogoTypescript /> </span>TypeScript</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaNode /> </span>Node.js</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbTransform /> </span>DOM Manipulation</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><MdDevices /> </span>Responsive Design</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><MdOutlineAccessibilityNew /> </span>Accessibility (a11y)</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaGlobeAmericas /> </span>Cross-Browser Compatibility</div>
                            </div>
                     </Marquee>
                     {/* ----------------Frameworks & Libraries Marquee------------- */}
                     <Marquee pauseOnHover={true} direction="right" speed={20} gradient={true} gradientColor="#0F0F0F" gradientWidth={50}>
                            <div className="flex gap-5 text-white">
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaReact /> </span>React.js</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><GiFishingHook /> </span>React Hooks</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><RiNextjsLine /> </span>Next.js</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiExpress /> </span>Express.js</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiTailwindcss /> </span>Tailwind CSS</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaBootstrap /> </span>Bootstrap</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbBrandRedux /> </span>Redux</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbBrandFramerMotion /> </span>Framer Motion</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaChartLine /> </span>Rechart </div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbBrandThreejs /> </span>Three.js </div>
                            </div>
                     </Marquee>
                     {/* -----------------Tools & Technologies Marquee-------------- */}
                     <Marquee pauseOnHover={true} speed={20} gradient={true} gradientColor="#0F0F0F" gradientWidth={50}>
                            <div className="flex gap-5 text-white">
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaGitAlt /> </span>Git</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><FaGithub /> </span>Github</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiMongodb /> </span>MongoDB</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiFirebase /> </span>Firebase</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbApi /> </span>Rest-Api</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiPostman /> </span>Postman</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><SiVite /> </span>Vite</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><VscVscode /> </span>Vs-Code</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><TbBrandVercel /> </span>Vercel</div>
                                   <div className="flex items-center gap-2 bg-dark-gray-3 font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2"><span className="text-pink-red"><IoLogoFirebase /> </span>Firebase </div>
                            </div>
                     </Marquee>
              </section>
       );
};

export default SkillsMarquee;