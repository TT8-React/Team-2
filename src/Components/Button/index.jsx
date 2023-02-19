import React from 'react'

import {Btn} from './style';

const Button = ({name,onClick}) => {
    return (
        <Btn onClick={onClick}>{name}</Btn>
    )
}

export default Button