import '../../styles/App.scss';
import Navbar from "../../components/Navbar/Navbar.tsx";
import Design from "./components/Projects/Projects.tsx";
import Projects from "./components/Achievements/Achievements.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Skills from "./components/Skills/Skills.tsx";

function Home() {
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-body">
                <Hero/>
                <Skills />
                <Design/>
                <Projects/>
            </div>
        </div>
    );
}

export default Home;