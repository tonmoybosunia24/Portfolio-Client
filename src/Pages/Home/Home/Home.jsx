import Header from "../../Shared/Header";
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Progress from "../Progress/Progress";
import Services from "../Services/Services";
import SkillsMarquee from "../SkillsMarquee/SkillsMarquee";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {

       return (
              <main className="bg-dark-gray-1">
                     <Header></Header>
                     <Services></Services>
                     <SkillsMarquee></SkillsMarquee>
                     <Achievements></Achievements>
                     <Progress></Progress>
                     <Education></Education>
                     <Contact></Contact>
                     <Testimonials></Testimonials>
              </main>
       );
};

export default Home;