import { img } from "../utils/constants";
const Header = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={img} alt="logo" />
      </div>

      <div>
        <h4>Book Cafe</h4>
      </div>

      <div className="names-indexing">
        <ul>
          <li>Home</li>
          <li>Quotes</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
