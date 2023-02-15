import React from 'react'
import img from '../../../Assets/Verified.png';
import {Wrapper} from '../../Verification/VerifyText/style';
const Img = () => {
    return (
        <Wrapper style={{margin:'10%'}}>
            <img src={img} alt="verified" />
        </Wrapper>
    )
}

export default Img