import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

export default function Router() {
    return (
        // Browser router vai fornecer as ferramentas necessarias para acessar as propriedades de rotas
        // do navegador(path e etc)
        <BrowserRouter>
        {/* Routes vai fazer o gerenciamento das rotas; ex: vai renderizar a primeira rota que bater
        de acordo com o path do navegador. */}
        {/* Ja o Route, é o arquivo que especifica a rota, e o elemento que será carregado */}
        <Routes>
            {/* Configurando a pagina mãe:
                1. Vai receber o path absoluto da página. 
                2. Carrega o elemento pai (que deve conter o <Outlet> para renderização dos filhos)
                3. Dentro da rota, são passadas as rotas filhas;
                4. A rota index, vai ser a rota a ser renderizada quando bater no path da mãe;
                5. As demais rotas filhas devem conter o path relativo. ex: path: 'cadastro', pois se 
                for passado o path: '/cadastro', o router vai entender que é uma rota absoluta e não uma
                rota filha.
            */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}