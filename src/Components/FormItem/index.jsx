import React from 'react'
import {WrapperItem,Input} from './style';

const FormItem = ({name,label,type,onChange,value,onBlur}) => {
    return (
        <>
        <WrapperItem>
            <label htmlFor={name}>{label}</label>
            <Input
            type={type}
            placeholder={`Enter ${label}`} 
            id={name} name={name} 
            onChange={onChange} 
            value={value} 
            onBlur={onBlur}
            />
        </WrapperItem>
        </>
    )
}

export default FormItem