import Cookies from "js-cookie"
import { TUser } from "modules/login/types/authTypes"

const tokenName = "token"
const userName = "user"

export const setToken = (token: string) => Cookies.set(tokenName, token)
export const deleteToken = () => Cookies.set(tokenName, '')
export const getToken = () => Cookies.get(tokenName)

export const getUserLocalStorage = () => JSON.parse(localStorage.getItem(userName))
export const setUserLocalStorage = (user: TUser) => localStorage.setItem(userName, JSON.stringify(user))
export const deleteUserLocalStorage = () => localStorage.removeItem(userName)