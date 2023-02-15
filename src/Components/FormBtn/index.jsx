import React from 'react'
import {Btn} from './style';
const FormBtn = ({name,type}) => {
    return (
        <Btn type={type}>{name}</Btn>
    )
}

export default FormBtn