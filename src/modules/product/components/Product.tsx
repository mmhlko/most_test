import { useEffect } from "react"
import { apiSingleProduct } from "../api/productApi"
import { useParams } from "react-router-dom"
import { ContentHeader } from "components/content-header"

export const Product = () => {
    const { productId } = useParams()

    useEffect(() => {       
        apiSingleProduct.fetchSingleProduct(+productId)
    }, [])
    
    return (
        <>
            <ContentHeader  textButton={'назад'} title={'ContentHeader'}>                
                
            </ContentHeader>
        </>
    )
}