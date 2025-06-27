import './Features.Module.scss';
import { featureData } from "./data.ts";
import Image from '../../../../assets/mobilelogin.png';

const FeatureCard = ({ title, description, icon: Icon }: {
    title: string;
    description: string;
    icon: React.ElementType;
}) => (
    <div className="feature-card" data-aos="fade-up">
        <div className="feature-card-icon">
            <Icon />
        </div>
        <div className="feature-card-content">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="features-wrapper">
            <div className="features-header" data-aos="fade-up">
                <h1>
                    From Vision to Reality —
                    <br className="line-break" />
                    From Concept to Impact
                </h1>
                <p>
                    I design centralized web platforms that simplify your workflow and amplify your impact. By blending technical precision with business strategy, I help bring your ideas to life with clarity and confidence.
                </p>
            </div>

            <div className="features-visual" data-aos="zoom-in">
                <img src={Image} alt="Application Preview" />
            </div>

            <div className="features-grid">
                {featureData.map((feature, index) => (
                    <FeatureCard {...feature} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Features;