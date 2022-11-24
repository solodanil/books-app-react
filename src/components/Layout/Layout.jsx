import styles from './styles.module.css';
import { Header } from '../Header/Header';
import { HeaderNavItem } from '../HeaderNavItem/HeaderNavItem';

export const Layout = (props) => {
    console.log(props.children)
    return <div className={ styles.layout }>
        <Header><HeaderNavItem name='Магазин'/></Header>
        <div className='main'>
            { props.children }
        </div>
    </div>
}