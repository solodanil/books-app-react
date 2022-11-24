import styles from './styles.module.css';

export const BooksLayout = (props) => {
    return <div className={ styles.layout }>
        { props.children }
    </div>
}