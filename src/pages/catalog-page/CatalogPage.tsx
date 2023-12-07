import { ContentHeader } from "components/content-header/ContentHeader"
import { CardList } from "modules/card-list"

export const CatalogPage = () => {
    
    return (
        <div className="content container">
            <ContentHeader title="Products" textButton='Home' to='/' />
            <CardList />
        </div>
    )
}