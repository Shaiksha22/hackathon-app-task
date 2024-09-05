import WhyParticipateCard from "./WhyParticipateCard";
import image1 from '../assets/icons/carbon_notebook-reference.svg';
import image2 from '../assets/icons/Robot.svg';
import image3 from '../assets/icons/Vector.svg';
import image4 from '../assets/icons/IdentificationCard.svg';

const items = [
  {
    logo: image1,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    logo: image2,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    logo: image3,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    logo: image4,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const WhyParticipate = () => {
  return (
    <section className="bg-white py-5 text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2>
            Why participate in
            {" "} <span style={{ color: "#28a745" }}>AI challenges?</span>
          </h2>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className="col-md-6 mb-4" key={item.title}>
              <WhyParticipateCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;

