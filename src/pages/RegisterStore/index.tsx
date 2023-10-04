import { useForm } from "react-hook-form"

function RegisterStore() {
    const { register, handleSubmit } = useForm();

    const registerStore = (form: unknown) => {
        console.log(form)
    }
    
    return (
        <main>
            <section className="title">
                <h4>Cadastrar Loja</h4>
            </section>
            <form onSubmit={handleSubmit(registerStore)}>
                <section>
                    <div className="flex flex-col">
                        <label >Nome</label>
                        <input {...register('name')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Categoria</label>
                        <input {...register('category')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Rua</label>
                        <input {...register('street')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Bairro</label>
                        <input {...register('neighborhood')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Número</label>
                        <input {...register('houseNumber')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Cidade</label>
                        <input {...register('city')} id="nameInput" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label >Cep</label>
                        <input {...register('postalCode')} id="nameInput" type="text" />
                    </div>
                </section>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}

export default RegisterStore;