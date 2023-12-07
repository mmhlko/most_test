import axios from "axios";
import { getToken } from "./auth";

export const AUTH_TOKEN = getToken() || null;
export const api = axios.create();

api.defaults.baseURL = "https://dummyjson.com/";
api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
