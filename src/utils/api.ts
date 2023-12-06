import axios from "axios";
import Cookies from "js-cookie";

export const AUTH_TOKEN = Cookies.get("token") || null;
export const api = axios.create();

api.defaults.baseURL = "https://dummyjson.com/";
api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
