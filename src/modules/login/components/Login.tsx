import { ContentHeader } from "components/content-header/ContentHeader"
import { Input } from "ui/button/input/Input"
import s from "./styles.module.scss"
import { Button } from "ui/button/Button"
import { ChangeEvent, FormEvent, useState } from "react"
import { apiAuth } from "../api/authApi"
import Cookies from "js-cookie"
import { AxiosError } from "axios"
import { useDispatch } from "react-redux"
import { setAuthErrorAction, setAuthLoadingAction, setUserAction } from "../store/authActions"
import { userSelector } from "../store/authSelectors"
import { useAppSelector } from "storage/hookTypes"
import { Spinner } from "components/spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "pages/routeConfig"

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const { errorState, loading } = useAppSelector(userSelector)

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAuthLoadingAction(true))
        apiAuth.login(username, password)
            .then(res => res.data)
            .then(data => {
                Cookies.set("token", data.token)
                delete data.token
                localStorage.setItem("user", JSON.stringify(data))
                dispatch(setUserAction(data))
            })
            .catch((err: AxiosError) => dispatch(setAuthErrorAction(err.message)))
            .finally(() => {
                dispatch(setAuthLoadingAction(false))
                navigate(RoutePath.products)
            })
    }

    return (
        <form className={s.form} onSubmit={handleLoginFormSubmit}>
            <ContentHeader title="Sing in" />
            <Input type="text" value={username} onChange={onEmailChange} placeholder="username" autoComplete="off" />
            <Input type="password" value={password} onChange={onPasswordChange} placeholder="password" autoComplete="off" />
            <Button type="submit">Submit</Button>
            {errorState && <p>{errorState}</p>}
            {loading && <Spinner />}
        </form>
    )
}