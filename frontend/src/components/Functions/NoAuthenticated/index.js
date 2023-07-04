import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NoAuthenticated = () => {
    
    const navigate = useNavigate()
    const id = localStorage.getItem('token');
    useEffect(() => {
        if (id == null) {
            navigate('/');
        }
    },[])        
    return <span />
};

export default NoAuthenticated;
