import { useState } from "react";
import { BASE_URL, API_KEY } from "../utils/constants";

const CoverBody = () => {
  const book = "Atomic habits";
  const [Bookdata, setBookData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}?q=${book}&key=${API_KEY}`);
      const data = await response.json();
      setBookData(data.items);
      console.log(data);
    } catch (error) {
      console.log("Error is Occurred", error);
    }
  };

  // fetchData();


  return (
    <div className="image-container">
      <div className="background-container">
        <h2 className="heading-text">Books For Anything!</h2>
        <p className="text">
          “Reading is an act of civilization; it’s one of the greatest acts of
          civilization because it takes the free raw material of the mind and
          builds castles of possibilities.”
        </p>

        <div>
          <form>
            <input
              type="textbox"
              className="input-box"
              placeholder="Enter Your Book Here..."
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoverBody;
