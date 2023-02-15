import React from 'react'
import {TextStyle} from './style';
const Text = ({text}) => {
    return (
        <div>
            <TextStyle>{text}</TextStyle>
        </div>
    )
}

export default Text