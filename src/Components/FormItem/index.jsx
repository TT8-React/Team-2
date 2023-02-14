import React from 'react'
import {WrapperItem,Input} from './style';

const FormItem = ({name,label,placeholder}) => {
    return (
        <WrapperItem>
            <label htmlFor={name}>{label}</label>
            <Input type="text" placeholder={placeholder} id={name} name={name}/>
        </WrapperItem>
    )
}

export default FormItem