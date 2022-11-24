import { BooksLayout } from "../../components/BooksLayout/BooksLayout"
import { Layout } from "../../components/Layout/Layout"
import { MainLayout } from "../../components/MainLayout/MainLayout"
import { Nav } from "../../components/Nav/Nav"
import { NavItem } from "../../components/NavItem/NavItem"
import React, {useState} from 'react';
import { Catalog } from "../../components/Catalog/Catalog"

export const IndexPage = (props) => {
const [ActiveCategory, SetActiveCategory] = useState(props.data[0])


    return <Layout>
            <MainLayout>
                <Nav>
                    { props.data.map((category) => <li><NavItem name={ category.name } key={ category.id } onClick={() => SetActiveCategory(category)}></NavItem></li>) }
                    <p onClick={() => console.log(ActiveCategory.name)}>Тест</p>
                </Nav>
                <BooksLayout>
                    <Catalog category={ ActiveCategory }></Catalog>
                </BooksLayout>
            </MainLayout>
        </Layout>
}