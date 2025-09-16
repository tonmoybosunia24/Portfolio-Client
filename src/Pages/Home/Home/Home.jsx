import Header from "../../Shared/Header";
import Services from "../Services/Services";
import SkillsMarquee from "../SkillsMarquee/SkillsMarquee";

const Home = () => {

       return (
              <main className="bg-dark-gray-1">
                     <Header></Header>
                     <Services></Services>
                     <SkillsMarquee></SkillsMarquee>
              </main>
       );
};

export default Home;