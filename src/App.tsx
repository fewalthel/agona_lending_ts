import './App.css'

import '/public/assets/fonts/font.css'
import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {Main} from "./components/Main/Main.tsx";

export function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}



