import React from 'react'
import WrapperForm from './../../Components/WrapperForm/index';
import FormTitle from './../../Components/FormTitle/index';
import FormItem from './../../Components/FormItem/index';
import TextForm from './../../Components/TextForm/index';
import FormBtn from './../../Components/FormBtn/index';
import  Text  from './Text';
import { FlexCenter } from './../../global/style';

const Login = () => {
    return (
        <div>
            <WrapperForm>
                <form>
                    <FormTitle title="LOGIN"/>
                    <FormItem label="Email ID" name="email" type="email"/>
                    <FormItem label="Password" name="password" type="password"/>
                    <Text text="Forget password ?"/>
                    <FlexCenter>
                        <FormBtn name="LOGIN"/>
                    </FlexCenter>
                    <TextForm text="Don’t have an account ?" spanText="Sign up"/>
                </form>
            </WrapperForm>
        </div>
    )
}

export default Login