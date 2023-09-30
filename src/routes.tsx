import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
    return (
        // Browser router vai fornecer as ferramentas necessarias para acessar as propriedades de rotas
        // do navegador(path e etc)
        <BrowserRouter>
        {/* Routes vai fazer o gerenciamento das rotas; ex: vai renderizar a primeira rota que bater
        de acordo com o path do navegador. */}
        {/* Ja o Route, é o arquivo que especifica a rota, e o elemento que será carregado */}
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}