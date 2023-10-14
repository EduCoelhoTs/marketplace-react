import { useFormState } from "../../../../hooks/useFormState";
import { addNewForm } from "../../redux/formSlice";

export default function StoreAdressForm() {

    const { handleSubmitForm, form, register } = useFormState({action: addNewForm, formName: 'storeAdress'})

    return (
        <main>
             <section>
                <h4 >Cadastrar Endereço</h4>
            </section>
            <form onBlur={handleSubmitForm}>
                <section>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Rua</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.street}
                    {...register('street')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Bairro</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.neighborhood}
                    {...register('neighborhood')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Número</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.houseNumber}
                    {...register('houseNumber')} 
                    id="nameInput" 
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Cidade</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.city}
                    {...register('city')}
                    id="nameInput"
                    type="text" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label >Cep</label>
                    <input style={{
                        padding: '8px 5px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '8px'
                    }} 
                    defaultValue={form?.postalCode}
                    {...register('postalCode')} 
                    id="name
                    Input" 
                    type="text" />
                </div>
                </section>
            </form>
        </main>
    )
} 