import styles from './styles.module.css';

export const HeaderNavItem = (props) => {
    return <header className={ styles.item }>
        { props.name }
    </header>
}