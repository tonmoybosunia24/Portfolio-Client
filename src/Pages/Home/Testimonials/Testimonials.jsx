// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import SectionTItle from "../../../Components/SectionTItle";
import useGetTestimonial from "../../../Hooks/Testimonials/useGetTestimonial";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimonials = () => {

       const { testimonials } = useGetTestimonial();

       return (
              /* --------------------Testimonials Section-------------------- */
              <section className="section sectionPaddingBottom">
                     {/* ----------------Section Title-------------- */}
                     <SectionTItle icon={<FaQuoteLeft />} title={'Testimonial'} subTitle={<>Real experiences from clients who trusted our work, sharing their feedback and <br className="hidden lg:block" /> appreciation for the services delivered.</>}></SectionTItle>
                     {/* -------------------Testimonial Section Container------------------ */}
                     <div className='h-auto'>
                            <Swiper
                                   slidesPerView={1}
                                   centeredSlides={true}
                                   spaceBetween={20}
                                   loop={true}
                                   initialSlide={0}
                                   modules={[Navigation, Autoplay, FreeMode]}
                                   autoplay={{
                                          delay: 2000,
                                          disableOnInteraction: true,
                                   }}
                                   breakpoints={{
                                          640: { slidesPerView: 1, centeredSlides: false },
                                          768: { slidesPerView: 1.5, centeredSlides: true },
                                          1024: { slidesPerView: 1.9, centeredSlides: true },
                                   }}
                            >
                                   {/* ------------------Map Testimonials--------------- */}
                                   {testimonials.map((testimonial, index) => (
                                          /* --------------------SwiperSlide Container-------------------- */
                                          <SwiperSlide key={index}>
                                                 {/* ------------------Testimonial Cart Container--------------- */}
                                                 <div className='relative min-h-[300px] flex flex-col justify-between border border-light-black rounded-xl text-white space-y-5 py-16 px-10 mt-10'>
                                                        {/* ----------------Cart Upper Icon---------------*/}
                                                        <div className='absolute left-10  -top-10 text-4xl bg-dark-gray-2 text-white border border-light-black rounded-full p-5'><BiSolidQuoteAltLeft /></div>
                                                        {/* -----------------Cart Header---------------- */}
                                                        <div className='flex justify-between items-center'>
                                                               <div className='flex items-center gap-3'>
                                                                      <div><img className='w-14 h-14 rounded-full' src={testimonial?.image} alt="clientImage" /></div>
                                                                      <div>
                                                                             <h3 className='font-bold text-xl'>{testimonial?.name}</h3>
                                                                             <p className='font-Rubik text-sm text-gray'>{testimonial?.role}</p>
                                                                      </div>
                                                               </div>
                                                               <div><Rating itemStyles={{ itemShapes: Star, activeFillColor: '#FF014F', inactiveFillColor: "#d1d5db" }} style={{ maxWidth: 80 }} value={testimonial?.rating} /></div>
                                                        </div>
                                                        {/* ------------------Cart Body------------------ */}
                                                        <p className='text-xl'>{testimonial?.feedback}</p>
                                                 </div>
                                          </SwiperSlide>
                                   ))}
                            </Swiper>
                     </div>
              </section>
       );
};

export default Testimonials;