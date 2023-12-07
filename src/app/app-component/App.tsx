import { memo } from "react";
import AppRouter from "pages/AppRouter";
import { Header } from "modules/header";
import { Footer } from "modules/footer";

const App = () => {

    return (
        <>
            <Header />
            <main >
                <AppRouter />
            </main>
            <Footer />
        </>
    )
}

export default memo(App);