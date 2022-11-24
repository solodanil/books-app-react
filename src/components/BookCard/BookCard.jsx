import { Counter } from '../Counter/Counter';
import styles from './styles.module.css';

export const BookCard = (props) => {
    return <div className={ styles.card }>
        <div className={ styles.book_container }>
            <h3 className={ styles.book_name }>{ props.BookName }</h3>
            <div className={ styles.smalls }>
                <small>{ props.BookAuthor }</small>
                <small>{ props.BookGenre }</small>
            </div>
            <h4 className={ styles.price }>{ props.Price }</h4>
        </div>
        <Counter></Counter>
    </div>
}