
import { useSelector } from "react-redux"
import { useNavigate,Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const isAuth=useSelector((store) => store.AuthReducer.isAuth);
    const navigate=useNavigate();
    console.log(isAuth)
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute