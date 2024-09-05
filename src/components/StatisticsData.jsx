import image1 from '../assets/icons/Group 1000002515.svg';
import image2 from '../assets/icons/Group 1000002516.svg';
import image3 from '../assets/icons/Group 1000002518.svg';

const items = [
  {
    image: image1,
    number: "100K+",
    title: "AI model submissions",
  },
  {
    image: image2,
    number: "50K+",
    title: "Data Scientists",
  },
  {
    image: image3,
    number: "100+",
    title: "AI Challenges hosted",
  },
];

const StatisticsData = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: "#002A3B" }}>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4 d-flex align-items-center justify-content-center" key={item.number}>
              <div className="d-flex align-items-center">
                <img src={item.image} alt="" className="img-fluid rounded-sm" style={{ marginRight: '1rem' }} />
                <div>
                  <h4 style={{ color: 'white' }}>{item.number}</h4>
                  <p style={{ color: 'white' }}>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsData;














