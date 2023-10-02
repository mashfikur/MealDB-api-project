
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {currentUser,loading}=useContext(AuthContext)
    const navigate=useNavigate()


    if(loading){
        return (
            <div className='flex flex-col w-full items-center'>
                <span className="loading loading-spinner text-warning loading-lg"></span>
            </div>
        )
    }

    if(!currentUser){
        navigate("/login")
        return;
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;