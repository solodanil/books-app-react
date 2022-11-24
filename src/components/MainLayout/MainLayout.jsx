import styles from './styles.module.css';

export const MainLayout = (props) => {
    return <div className={styles.layout}>
        { props.children }
    </div>
}