import {  useState } from "react";
import { BASE_URL, API_KEY, book } from "../utils/constants";
import BookComponent from "./BookComponent";

const BestBooks = () => {
  const [bestBooks, setBestBooks] = useState([]);

  const fetchBestData = async () => {
    try {
      const response = await fetch(`${BASE_URL}?q=${book}&key=${API_KEY}`);
      const data = await response.json();
      setBestBooks(data.items);
      console.log(data.items);
    } catch (error) {
      console.log("Error Has Occured", error);
    }
  };


    fetchBestData();

  return (
    <div className="mainbook-conatainer">
      {bestBooks.map((book) => (
        <BookComponent key={book.id} bookData={book.volumeInfo} />
      ))}
    </div>
  );
};

export default BestBooks;
