import Image from "../../../../assets/mobilelogin.png";
import './Hero.Module.scss';

const Hero = () => {

    return (
        <div className="hero-container">
            <div className="hero-header">
                <h1>
                    Supercharge Your
                    Workflow
                </h1>
                <p>
                    I design centralized web platforms that simplify workflows and give you full operational control — enabling you to manage and monitor every aspect of your business at your fingertips.
                </p>
            </div>

            <div className="hero-visual">
                <img src={Image} alt="Application Preview"/>
            </div>
        </div>
    )
}

export default Hero;