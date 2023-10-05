import HorizontalLinearStepper from "../../components/Stepper";
import StoreAdressForm from "./components/StoreAdressForm";
import StoreFormOwner from "./components/StoreFormOwner";
import StoreInfoForm from "./components/StoreInfoForm";

const steps = [
    {
        name: 'Informações da loja',
        component: <StoreInfoForm />
    },
    {
        name: 'Endereço',
        component: <StoreAdressForm />
    },
    {
        name: 'Informações de Usuário',
        component: <StoreFormOwner />
    },
]

function RegisterStore() {
    
    return (
       <main>
            <HorizontalLinearStepper steps={steps} />
       </main>
    )
}

export default RegisterStore;