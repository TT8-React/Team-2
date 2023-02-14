import React from 'react'
import {Text} from './style';
const TextForm = ({text,spanText}) => {
    return (
        <Text>{text}<span>{spanText}</span></Text>
    )
}

export default TextForm