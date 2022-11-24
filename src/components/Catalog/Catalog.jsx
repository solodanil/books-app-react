import { BookCard } from "../BookCard/BookCard"

export const Catalog = (props) => {
    return <>
        {props.category.books.map((book) => <BookCard BookName={ book.name } BookAuthor={ book.author } BookGenre={ book.genre } Price={ book.price +'₽'} key={ book.id }></BookCard>)}
    </>
}