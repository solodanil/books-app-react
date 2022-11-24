import styles from './styles.module.css';

export const NavItem = (props) => {
    return <div className={styles.layout} onClick={props.onClick}>
        {props.name}
    </div>
}