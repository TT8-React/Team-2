import React from 'react'
import { Link } from 'react-router-dom';

import {Text} from './style';

const TextForm = ({text,spanText,linkTO}) => {
    return (
        <Text>{text}<Link to={linkTO}>{spanText}</Link></Text>
    )
}

export default TextForm