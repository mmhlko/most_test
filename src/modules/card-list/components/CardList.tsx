import { FormEvent, useEffect, useState } from "react"
import { apiProducts } from "../api/productsApi"
import { useDispatch } from "react-redux"
import { resetCardListCurrentSortAction, setCardListAction, setCardListByCurrentSortAction, setCardListErrorAction, setCardListLoadingAction } from "../store/cardListActions";
import { useAppSelector } from "storage/hookTypes";
import { Card } from "modules/card-list/components/card/Card";
import s from "./styles.module.scss"
import { cardListSelector } from "../store/cardListSelectors";
import { Spinner } from "components/spinner/Spinner";
import { AxiosError } from "axios";
import { RadioList } from "components/radio-list/RadioList";
import { TABS } from "../types/cardListTypes";
import { Search } from "components/search/Search";
import { useDebounce } from "hooks/useDebounce";
import { Pagination } from "antd";
const PAGE_SIZE = 12

export const CardList = () => {
    const { data: products, loading, currentSort } = useAppSelector(cardListSelector)
    const productList = products?.products
    const totalCardsCount = products?.total
    const dispatch = useDispatch();
    const [startItem, setStartItem] = useState(0)
    const endItem = startItem + PAGE_SIZE
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); //стейт для строки поиска
    const debounceSearchQuery = useDebounce(searchQuery, 300)
    const isPaginated = totalCardsCount / PAGE_SIZE > 1;
    const lastPage = Math.ceil(totalCardsCount / PAGE_SIZE)
    const [categoryList, setCategoryList] = useState<string[]>([])

    const apiGetProducts = () => {
        dispatch(setCardListLoadingAction(true))
        apiProducts.fetchLimitProducts(startItem, endItem)
            .then(res => dispatch(setCardListAction(res.data)))
            .then(() => apiProducts.fetchProductsCategories())
            .then(res => res.data)
            .then((data) => setCategoryList(data))
            .catch((err: AxiosError) => dispatch(setCardListErrorAction(err.message)))
            .finally(() => dispatch(setCardListLoadingAction(false)))        
    }
    const apiFilterByCategory = (category: string) => {
        apiProducts.fetchProductsByCategory(category)
            .then(res => dispatch(setCardListAction(res.data)))
            .catch((err: AxiosError) => dispatch(setCardListErrorAction(err.message)))
            .finally(() => {
                dispatch(setCardListLoadingAction(false))
                dispatch(resetCardListCurrentSortAction())
            }) 
    }

    const handleSortInputChange = (tab: string) => {
        dispatch(setCardListByCurrentSortAction(tab))
    }

    const handleFormSubmit = (evnt: FormEvent<HTMLFormElement>) => {
        evnt.preventDefault();
        handleSearchRequest();
        setSearchQuery("")
    }
    const handleInputChange = (dataInput: string) => {
        setSearchQuery(dataInput)
    }

    const handleSearchRequest = () => {
        apiProducts.fetchSearchProducts(debounceSearchQuery)
            .then(res => dispatch(setCardListAction(res.data)))
    }

    const handleClickPage = (page: number) => {
        console.log('lastPage', totalCardsCount);
        setPage(page);
        page === 1 ? setStartItem(0) : setStartItem((page - 1) * PAGE_SIZE);       
        page === lastPage && setStartItem(totalCardsCount - PAGE_SIZE)
    }

    useEffect(() => {
        handleSearchRequest()
    }, [debounceSearchQuery])

    useEffect(() => {
        apiGetProducts()
    }, [startItem])

    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <>
                        <Search handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} searchValue={searchQuery}/>
                        <RadioList
                            name="sorting"
                            tabs={TABS}
                            action={handleSortInputChange}
                            onOptionChecked={apiFilterByCategory}
                            title="Sort"
                            currentCheckedItem={currentSort}
                            extraClass={s.sort_sticky}
                            selectOptions={categoryList}                       
                        >
                        </RadioList>
                        <section className={s.cardList_wrapper}>
                            {productList?.map(item => <Card key={item.id} {...item} />)}
                        </section>
                        {isPaginated &&
                                <Pagination
                                    total={totalCardsCount}
                                    pageSize={PAGE_SIZE}
                                    current={page}
                                    onChange={handleClickPage}
                                    className={s.pagination}
                                    showSizeChanger={false}
                                />
                            }
                    </>
            }
        </>
    )
}