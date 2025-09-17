import Header from "../../Shared/Header";
import Achievements from "../Achievements/Achievements";
import Progress from "../Progress/Progress";
import Services from "../Services/Services";
import SkillsMarquee from "../SkillsMarquee/SkillsMarquee";

const Home = () => {

       return (
              <main className="bg-dark-gray-1">
                     <Header></Header>
                     <Services></Services>
                     <SkillsMarquee></SkillsMarquee>
                     <Achievements></Achievements>
                     <Progress></Progress>
              </main>
       );
};

export default Home;