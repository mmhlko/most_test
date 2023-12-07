import { memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { mainRoutes } from "./routeConfig";
import { TRoutes } from "./types";
import { useDispatch } from "react-redux";
import { deleteUserLocalStorage, getToken, getUserLocalStorage } from "utils/auth";
import { setUserAction } from "modules/login/store/authActions";

const AppRouter = () => {

    const dispatch = useDispatch();

    const getAuthorizedUser = () => {
        const token = getToken();
        const user = getUserLocalStorage();
        if (token && user) {
            dispatch(setUserAction(user))
        } 
        if (!token) {
            dispatch(setUserAction(null))
            deleteUserLocalStorage()
        }
    }    

    useEffect(() => {
        getAuthorizedUser()    
    }, [])

    const routeMap = ({ path, element }: TRoutes) => <Route path={path} element={element} key={path} />

    return (
        <Routes>
            {mainRoutes.map(routeMap)}
        </Routes>
    )
}

export default memo(AppRouter);