import {useNavigate} from "react-router-dom";

export default function NotFount() {

    const navigate = useNavigate();

    return (
        <main>
            <p>Erro 404: Rota não encontrada</p>
            {/* Como voltar para a rota anterior? 
            Primeiro, precisamos entender o funcionamento do react router dom.
            É criada uma pilha de alterações. Como assim?
            Cada rota acessada, é armazenada em uma pilha, e podemos ter acesso a essa pilha;
            ex: 
            [
                /,
                /Home,
                /Cadastro,
            ]
            Mas como acessar essa pilha? para isso, utilizamos um hook do react.
            UseNavigate()
            Esse hook recebe como parametro o path de uma rota da qual queremos fazer um redirecionamento.
            Para retornar a rota anterior, utilizamos o parametro (-1), que será a posição anterior a atual na
            pilha de rotas.
            */}

            <button onClick={() => navigate(-1)}>
                {'<Voltar'}
            </button>
            
        </main>

    )
}