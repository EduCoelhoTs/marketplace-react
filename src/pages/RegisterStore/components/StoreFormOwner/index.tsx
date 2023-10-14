import { useFormState } from "../../../../hooks/useFormState"
import { addNewForm } from "../../redux/formSlice"

export default function StoreFormOwner() {

    const { handleSubmitForm, form, register } = useFormState({action: addNewForm, formName: 'storeOwnerInfo'})

    return (
        <main>
             <section>
                <h4 >Dados de usuário</h4>
            </section>
            <form onBlur={handleSubmitForm}>
                <section>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Nome</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.name}
                    {...register('name')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >CPF</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.cpf}
                    {...register('cpf')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Data de Nascimento</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.bornDate}
                    {...register('bornDate')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >RG</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.nationalRegister}
                    {...register('nationalRegister')}
                    id="nameInput"
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Patrimonio</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.budged}
                    {...register('budged')} 
                    id="name
                    Input" 
                    type="text" />
                </div>
                </section>
            </form>
        </main>
    )
} 