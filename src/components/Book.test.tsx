import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BookModel from "../models/book-model";
import {store} from '../state/store';
import Book from "./Book";


describe("Book Component Test", () => {
  test("test rendering book", () => {
    const bookData: BookModel = {
        id: "nggnmAEACAAJ",
        authors: "William E. Shotts, Jr.",
        shelf: "currentlyReading",
        title: "test title",
        imageLinks: { smallThumbnail: "test path" },
      };
    
    render(
     <Provider store={store} ><Book book={bookData}/></Provider>
    );
    const renderElement = screen.getByText('Read')
    expect(renderElement).toBeInTheDocument();
  });
});