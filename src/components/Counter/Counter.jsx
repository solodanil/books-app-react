import { useState } from 'react';
import styles from './styles.module.css';

export const Counter = (props) => {
const [count, setCount] = useState(0);

    return <div className={ styles.counter }>
        <button className={ styles.counter_button } onClick={() => setCount(count - 1)} disabled={count === 0}>–</button>
        <div className={ styles.counter_num }>{count}</div>
        <button className={ styles.counter_button } onClick={() => setCount(count + 1)}>+</button>
    </div>
}