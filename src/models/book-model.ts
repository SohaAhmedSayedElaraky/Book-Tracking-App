import ImageLinks from "./image-model";

class BookModel {
    id?: string;
    title?: string;
    authors?: string;
    shelf?: string;
    imageLinks?: ImageLinks
    
}

export default BookModel;