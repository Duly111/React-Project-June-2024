import { useEffect, useState } from "react";

export function useForm(initialValues,submitCallBack){
    const [values,setValues] = useState(initialValues);

    useEffect(() =>{
        setValues(initialValues);
    },[initialValues])

    const changeHendler = (e) =>{
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHedler = async (e) =>{
        e.preventDefault();
        await submitCallBack(values);
        setValues(initialValues);
    }

    return{
        values,
        changeHendler,
        submitHedler,
    }
}