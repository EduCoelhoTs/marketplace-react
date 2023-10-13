import { useForm } from "react-hook-form";

export default function StoreInfoForm() {
    const { register, handleSubmit, setValue } = useForm();

    const registerStore = (form: unknown) => {
        console.log(form)
    }

    return (
        <main>
        <section>
            <h4 >Cadastrar Loja</h4>
        </section>
        <form onSubmit={handleSubmit(registerStore)}>
            <section>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label className="" >Nome</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    {...register('name')}
                    id="nameInput"
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Categoria</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    {...register('category')} 
                    id="nameInput"
                    type="text" />
                </div>
            </section>
            <button type="submit">Avançar</button>
        </form>
    </main>
    )
} 