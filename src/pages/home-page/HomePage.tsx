import { ContentHeader } from "components/content-header"
import { RoutePath } from "pages/routeConfig"
import { Link } from "react-router-dom"
import { Button } from "ui/button/Button"

export const HomePage = () => {    
    return (
        <div className="content container">
            <ContentHeader title="Home" />
            <Link to={RoutePath.products}>
                <Button>
                    Get products
                </Button>
            </Link>
        </div>
    )
}