import '../../styles/App.scss';
import Navbar from "../../components/Navbar/Navbar.tsx";
import Design from "./components/Design/Design.tsx";
import Projects from "./components/Projects/Projects.tsx";

function Home() {
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-body">
                <Design/>
                <Projects/>
            </div>
        </div>
    );
}

export default Home;