import { IndexPage } from "./pages/IndexPage/IndexPage"
import { BookPage } from "./pages/BookPage/BookPage"
import data from './mock.json'

export function App() {
    console.log(data);
    return <IndexPage data={ data }></IndexPage>
    // return <BookPage book={ data[0].books[0] }/>
}