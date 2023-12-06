import { ContentHeader } from "components/content-header"
import { CardList } from "modules/card-list"

export const CatalogPage = () => {
    
    return (
        <div className="content container">
            <ContentHeader title="Каталог" textButton='Главная' to='/' />
            <CardList />
        </div>
    )
}