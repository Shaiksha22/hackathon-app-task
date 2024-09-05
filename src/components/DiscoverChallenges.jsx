
import DiscoverChallengesCard from "./DiscoverChallengesCard";
import { items } from "../utils/items";
import { useState } from "react";
import styles from './DiscoverChallenges.module.css'; 
const checkStatusList = ["easy", "medium", "hard"];
const checkLevelList = ["all", "active", "past", "upcoming"];

const CheckListLayout = ({ item, setSearchItem }) => (
  <div className="d-flex align-items-center p-2 bg-light rounded cursor-pointer">
    <input
      id={item}
      type="checkbox"
      value={item}
      onChange={(e) =>
        e.target.value !== "all"
          ? e.target.checked && setSearchItem(e.target.value)
          : e.target.checked && setSearchItem("")
      }
    />
    <label htmlFor={item} className="ms-2">{item}</label>
  </div>
);

const DiscoverChallenges = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => setSearchItem(e.target.value);
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchItem) ||
      item.type.toLowerCase().includes(searchItem) ||
      item.status.toLowerCase().includes(searchItem)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem("");
  };

  return (
    <section>
      <div className="py-4" style={{backgroundColor: "#002A3B"}}>
        <div className="container">
          <h2 className="text-white mb-4">Explore challenges</h2>
          <div className="d-flex align-items-center mb-3">
            <form className="w-100 me-2" onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchItem}
                onChange={handleChange}
                placeholder="🍳 Search"
                className="form-control"
              />
            </form>
            <div className="position-relative">
              <button
                type="button"
                className="btn btn-light text-dark"
                onClick={() => setIsOpen(!isOpen)}
              >
                Filter
              </button>
              {isOpen && (
                <form className="position-absolute bg-white shadow rounded p-3  text-dark
                mt-2">
                  <div className="mb-3">
                    <p className="fw-bold mb-2">Status</p>
                    {checkLevelList.map((item, index) => (
                      <CheckListLayout
                        key={index}
                        item={item}
                        setSearchItem={setSearchItem}
                      />
                    ))}
                  </div>
                  <div className="mb-3">
                    <p className="fw-bold mb-2">Level</p>
                    {checkStatusList.map((item, index) => (
                      <CheckListLayout
                        key={index}
                        item={item}
                        setSearchItem={setSearchItem}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <DiscoverChallengesCard item={item} className={`card ${styles.cardHover}`} />
              </div>
            ))
          ) : (
            <h2 className="text-center text-white">Please try another search...</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscoverChallenges;







