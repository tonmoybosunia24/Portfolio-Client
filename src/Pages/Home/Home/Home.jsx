import Header from "../../Shared/Header";
import Achievements from "../Achievements/Achievements";
import Services from "../Services/Services";
import SkillsMarquee from "../SkillsMarquee/SkillsMarquee";

const Home = () => {

       return (
              <main className="bg-dark-gray-1">
                     <Header></Header>
                     <Services></Services>
                     <SkillsMarquee></SkillsMarquee>
                     <Achievements></Achievements>
              </main>
       );
};

export default Home;