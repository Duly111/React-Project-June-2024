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

    const submitHendler = async (e) =>{
        e.preventDefault();
        await submitCallBack(values);
        setValues(initialValues);
    }

    return{
        values,
        changeHendler,
        submitHendler,
    }
}