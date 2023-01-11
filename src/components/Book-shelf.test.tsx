import { render , screen} from "@testing-library/react";
import Bookshelf from "./Book-shelf";
import '@testing-library/jest-dom';
import React from "react";
import { Provider } from "react-redux";
import { store } from "../state/store";

describe('Bookshelf', () => {

test("should shelf title appears", () => {

 const {getByTestId} = render(
<Provider store={store}>
<Bookshelf shelfTitle="Read" allBooks={[ {
  id: "nggnmAEACAAJ",
  authors: "William E. Shotts, Jr.",
  shelf: "currentlyReading",
  title: "test title",
  imageLinks: { smallThumbnail: "test path" },
}, {
  id: "nggnmAEACAAJ",
  authors: "William E. Shotts, Jr.",
  shelf: "Read",
  title: "test title",
  imageLinks: { smallThumbnail: "test path" },
}]}/>
</Provider>


);
const readElement = screen.getByText('None')
  expect(readElement).toBeInTheDocument();
});
})