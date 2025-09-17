const SectionTItle = ({ icon, title, subTitle }) => {
       return (
              /* ------------------Section Title Container------------------ */
              <div className="space-y-3 pb-10">
                     <h3 className="flex justify-center items-center gap-2 font-bold text-pink-red hover:text-white text-5xl"><span>{icon}</span><span>{title}</span></h3>
                     <p className="font-Rubik text-gray text-xs md:text-sm lg:text-base hover:text-white text-center">{subTitle}</p>
              </div>
       );
};

export default SectionTItle;