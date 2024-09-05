import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDateDiff } from "../utils/formatTime";
import styles from './DiscoverChallengesCard.module.css'; // Import the CSS module

const DiscoverChallengesCard = ({ item }) => {
  const [diff, setDiff] = useState({});

  const status =
    new Date() > new Date(item.startDate) && new Date() < new Date(item.endDate)
      ? "Active"
      : new Date() > new Date(item.endDate)
      ? "Past"
      : "Upcoming";

  item.status = status;

  useEffect(() => {
    const timer =
      (status === "Upcoming" || status === "Active") &&
      setInterval(() => {
        setDiff(getDateDiff(new Date(), new Date(item.startDate)));
      }, 1000);
    return () => clearInterval(timer);
  }, [item]);

  return (
    <Link to={`/hackathon/details/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className={`card mb-4 mx-2 shadow-sm ${styles.card}`} style={{ width: '18rem' }}>
        <img src={item.image} className="card-img-top" alt="Card header image" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended in"}
          </p>
          {status !== "Past" ? (
            <div className="d-flex justify-content-between">
              <div className="text-center">
                <h4>{diff.day}</h4>
                <p>Days</p>
              </div>
              <div className="text-center">
                <h4>{diff.hour}</h4>
                <p>Hours</p>
              </div>
              <div className="text-center">
                <h4>{diff.minute}</h4>
                <p>Minutes</p>
              </div>
              <div className="text-center">
                <h4>{diff.second}</h4>
                <p>Seconds</p>
              </div>
            </div>
          ) : (
            <h4 className="text-center">{item.endDate}</h4>
          )}
          <div className="d-flex justify-content-between mt-3">
            <button
              className={`btn ${
                status === "Upcoming"
                  ? "btn-warning"
                  : status === "Active"
                  ? "btn-success"
                  : "btn-danger"
              } ${styles.btn}`}
            >
              {status}
            </button>
            <button
              disabled={status === "Past"}
              className={`btn btn-success ${status === "Past" ? "disabled" : ""} ${styles.btn}`}
            >
              Participate now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscoverChallengesCard;



