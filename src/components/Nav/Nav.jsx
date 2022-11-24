import styles from './styles.module.css';
// import { NavItem } from '../NavItem/NavItem';

export const Nav = (props) => {
    return <ul className={styles.nav}>  {/* TODO 01:05 */}
        {
            props.children
        }
    </ul>
}