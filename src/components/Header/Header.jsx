import styles from './styles.module.css';

export const Header = (props) => {
    return <header className={ styles.header }>
        { props.children }
    </header>
}