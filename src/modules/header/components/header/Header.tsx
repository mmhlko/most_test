import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import classNames from "classnames";
import { RoutePath } from "pages/routeConfig";
import { useAppSelector } from "storage/hookTypes";
import { userSelector } from "modules/login/store/authSelectors";
import { deleteToken, deleteUserLocalStorage } from "utils/auth";
import { useDispatch } from "react-redux";
import { setUserAction } from "modules/login/store/authActions";

export const Header = () => {
    const { data: user } = useAppSelector(userSelector)
    const dispatch = useDispatch();
    const handleClickLogout = () => {
        dispatch(setUserAction(null))
        deleteToken()
        deleteUserLocalStorage()
    }
    return (
        <header className={s.header}>
            <div className={classNames('container content', s.header__wrapper)}>
                <div className={s.logo}>
                    <Link to={RoutePath.home} className={s.menu__link} >
                        LOGO
                    </Link>
                </div>
                <div className={s.menu}>
                    {user
                        ? <>
                            <Link to={RoutePath.home} className={s.menu__link} onClick={handleClickLogout}>
                                Sing out
                            </Link>
                            <Link to={RoutePath.profile} className={s.menu__link} >
                                Profile
                            </Link>
                            <Link to={RoutePath.cart} className={s.menu__link} >
                                Cart
                            </Link>
                        </>
                        : <Link to={RoutePath.login} className={s.menu__link} >
                            Sing in
                        </Link>
                    }
                </div>

            </div>
        </header>
    );
}