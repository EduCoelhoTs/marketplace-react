import HorizontalLinearStepper, { StepperProps } from "../../components/Stepper";
import StoreAdressForm from "./components/StoreAdressForm";
import StoreFormOwner from "./components/StoreFormOwner";
import StoreInfoForm from "./components/StoreInfoForm";

const steps: StepperProps = {
    steps: [
        {
            name: 'Informações da loja',
            component: <StoreInfoForm />,
        },
        {
            name: 'Endereço',
            component: <StoreAdressForm />,
        },
        {
            name: 'Informações de Usuário',
            component: <StoreFormOwner />,
        },
    ]
}

function RegisterStore() {
    
    return (
       <main>
                <HorizontalLinearStepper steps={steps.steps} />
       </main>
    )
}

export default RegisterStore;