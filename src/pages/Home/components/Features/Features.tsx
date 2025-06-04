import './Features.Module.scss';
import { featureData } from "./data.ts";
import Image from '../../../../assets/mobilelogin.png';

const Feature = ({ title, description, icon: Icon }: {
    title: string;
    description: string;
    icon: React.ElementType;
}) => (
    <div className="feature-card" data-aos="fade-up">
        <div className="feature-icon">
            <Icon />
        </div>
        <div className="feature-content">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="features-section">
            <header className="features-header">
                <h1>
                    From Vision to Reality —
                    <br className="line-break" />
                    From Concept to Impact
                </h1>
                <p>
                    We transform ideas into powerful, centralized web platforms that bring your operation to your fingertips. Our blend of technical expertise and business insight empowers you to lead with clarity and confidence.
                </p>
            </header>

            <div className="features-image-glass">
                <img src={Image} alt="App preview" />
            </div>

            <div className="features-grid">
                {featureData.map((feature, index) => (
                    <Feature {...feature} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Features;