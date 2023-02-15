import React from 'react'
import {WrapperItem,Input} from './style';

const FormItem = ({name,label,type}) => {
    return (
        <WrapperItem>
            <label htmlFor={name}>{label}</label>
            <Input type={type} placeholder={`Enter ${label}`} id={name} name={name}/>
        </WrapperItem>
    )
}

export default FormItem