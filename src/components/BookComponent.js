import { img } from "../utils/constants";
const BookComponent = (props) => {
  const { bookData } = props;

  const { name, authors, description } = bookData;
  return (
    <div className="book-container">
      <div className="inbook-container">
        <div className="bimg-container">
          <img src={img} alt="imag" />
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{authors}</h3>
          <p>{description}</p>
          <button>More Details</button>
          <button>Add To Favurites</button>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
