import './Hero.Module.scss';
import Image from '../../../../assets/Media/Devices.png';

const Hero: React.FC = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <header>
                    <h1>
                        From Vision to Reality — <br className="line-break"/>
                        From Concept to Impact
                    </h1>
                </header>

                <section>
                    <p>
                        I transform ideas into powerful, centralized web platforms that put your entire operation at
                        your fingertips. By combining deep technical expertise with business insight, I empower
                        businesses to lead with efficiency and clarity.
                    </p>
                </section>

                <div className="hero-image-wrapper">
                    <img
                        className="hero-image"
                        src={Image}
                        alt="Modern web applications displayed across multiple devices"
                    />
                </div>
            </div>

            <div className="custom-shape-divider-bottom-1748925046">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;