const WhyParticipateCard = ({ item }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column align-items-start">
        <div className="mb-3 p-2 bg-white rounded" style={{ width: "fit-content" }}>
          <img src={item.logo} alt="" />
        </div>
        <h4 className="card-title">{item.title}</h4>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default WhyParticipateCard;

