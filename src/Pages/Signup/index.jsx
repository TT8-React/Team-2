import React from 'react'
import WrapperForm from './../../Components/WrapperForm/index';
import FormTitle from './../../Components/FormTitle/index';
import FormItem from './../../Components/FormItem/index';
import TextForm from './../../Components/TextForm/index';
import FormBtn from './../../Components/FormBtn/index';
import { FlexCenter } from '../../global/style';

const Signup = () => {
    return (
        <div>
            <WrapperForm>
                <form>
                    <FormTitle title="SIGN UP"/>
                    <FormItem label="Name" name="name" type="text"/>
                    <FormItem label="Email ID" name="email" type="email"/>
                    <FormItem label="Password" name="password" type="password"/>
                    <FlexCenter>
                        <FormBtn name="LOGIN"/>
                    </FlexCenter>
                    <TextForm text="Already have an account ?" spanText="Login"/>
                </form>
            </WrapperForm>
        </div>
    )
}

export default Signup