import { BaseCard } from "../../components/BaseCard/BaseCard"
import { BookCard } from "../../components/BookCard/BookCard"
import { ReviewCard } from "../../components/ReviewCard/ReviewCard"
import { Layout } from "../../components/Layout/Layout"
import styles from './styles.module.css';

export const BookPage = (props) => {
    return <Layout>
        <div className={ styles.row }>
            <BookCard BookName="Несносное проклятье некроманта" BookAuthor='Блинова Маргарита' BookGenre='Фэнтези' Price='250 ₽'></BookCard>
            <BaseCard title='Аннотация'>
                <p>Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить "что-нибудь для вечной любви"? Подумай о некромантии!</p>
                <p>Присоединяйся к дружной компании черных магов и просто любителей гулять по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками черного. Вперед, Тесса Грей!</p>
            </BaseCard>
        </div>
        <div className={ styles.reviews }>
            <ReviewCard author='Анна К'>
                <p>С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".</p>
            </ReviewCard>
        </div>
            {/* <MainLayout>
                <Nav nav={props.data.map((genre) => genre.name)}></Nav>
                <BooksLayout>
                    <BookCard BookName="Несносное проклятье некроманта" BookAuthor='Блинова Маргарита' BookGenre='Фэнтези' Price='250 ₽'></BookCard>
                </BooksLayout>
            </MainLayout> */}
        </Layout>
}