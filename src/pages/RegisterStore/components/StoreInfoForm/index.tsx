import { addNewForm } from "../../redux/formSlice";
import { useFormState } from "../../../../hooks/useFormState";

export default function StoreInfoForm() {
   
    const { handleSubmitForm, form, register } = useFormState({action: addNewForm, formName: 'storeInfo'})

    return (
        <main>
        <section>
            <h4 >Cadastrar Loja</h4>
        </section>
        <form onBlur={handleSubmitForm}>
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
                    defaultValue={form?.name}
                    {...register('name', {required: true})}
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
                    defaultValue={form?.category}
                    {...register('category', {required: true})} 
                    id="nameInput"
                    type="text" />
                </div>
            </section>
            {/* <button type="submit">Avançar</button> */}
        </form>
    </main>
    )
} 