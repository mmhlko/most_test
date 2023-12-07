import { Navigate } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { ReactNode, memo } from "react";
import { getUserLocalStorage } from "utils/auth";

export type TProtectedRouteProps = {
    onlyOnAuth?: boolean;
    children: ReactNode;
}

export const ProtectedRoute = memo(({ onlyOnAuth=false, children }: TProtectedRouteProps) => {   

    if (onlyOnAuth && getUserLocalStorage()) {
        return <Navigate replace to={{ pathname: RoutePath.home }} />;
    }
    if (!onlyOnAuth && !getUserLocalStorage()) {
        return (
            <Navigate
                replace to={{ pathname: RoutePath.login }}
            />
        )
    }

    return <>{children}</>
})
