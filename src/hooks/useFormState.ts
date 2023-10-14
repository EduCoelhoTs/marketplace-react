import {  useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction }  from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

interface UseFormStateProps {
    formName: string;
     action: (data: unknown) => AnyAction
}

export const useFormState = (formStateProps: UseFormStateProps) => {
    const { register, getValues, formState } = useForm();

    const form = useSelector((state: RootState) => state.form[formStateProps.formName]);
    const dispatch = useDispatch();

    const handleSubmitForm = () => {
        if (formState.isValid) {
            dispatch(formStateProps.action({formName: formStateProps.formName, form: getValues()}))
        }
    }

    return { register, handleSubmitForm, form }
}