import Signup from '../../Pages/Signup';
import { useAuthContext } from '../../Context/AuthContext';
import { PATHS } from '../../Routes';
import { Navigate } from 'react-router-dom';


const SignUpAuth = ()=>{
    const {
        authorized,
    } = useAuthContext();
    return <>{authorized?(<Navigate to={PATHS.DASHBOARD}/>):(<Signup />)}</>

}
export default SignUpAuth;