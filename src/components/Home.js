import Header from "./Header";
import CoverBody from "./CoverBody";
import BestBooks from "./BestBooks";
import "./App.css";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <CoverBody />
      </div>
      <div>
        <BestBooks />
      </div>
    </div>
  );
};

export default Home;
