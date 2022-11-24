import styles from './styles.module.css';

export const BaseCard = (props) => {
    return <div className={styles.card}>
        <h4>{ props.title }</h4>
        { props.children }
    </div>
}