import React from 'react'
import {WrapperItem,Input} from './style';

const FormItem = ({name,label,placeholder,type}) => {
    return (
        <WrapperItem>
            <label htmlFor={name}>{label}</label>
            <Input type={type} placeholder={placeholder} id={name} name={name}/>
        </WrapperItem>
    )
}

export default FormItem