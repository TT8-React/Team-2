import { Navigate } from 'react-router-dom';
import Login from '../../Pages/Login';
import { useAuthContext } from '../../Context/AuthContext';
import { PATHS } from '../../Routes';

const LoginAuth = ()=>{
    const {
        authorized,
    } = useAuthContext();
    return <>
        {authorized?(<Navigate to={PATHS.DASHBOARD}/>):(<Login />)}
    </>
}
export default LoginAuth;