import { render } from "@testing-library/react";
import Bookshelf from "./Book-shelf";
import '@testing-library/jest-dom';
import React from "react";

describe('Bookshelf', () => {

test("should shelf title appears", () => {
 const {getByTestId} = render(<Bookshelf shelfTitle="" allBooks={[]} updateBookCategory={()=>{}}/>);
  expect(getByTestId('shelfTitle')).toBeInTheDocument();
});
})