import { Link, useLocation } from 'react-router-dom';
import { Icon } from "../../assets";
import { Blob } from "../../components";
import { NavBarAuth } from "../../components";
import { IElementJSX } from "../../interfaces";
import "./style.scss";

const img0 = 'https://res.cloudinary.com/ddeguj0jq/image/upload/v1650245847/img0_gagfkv.jpg'
const img1 = 'https://res.cloudinary.com/ddeguj0jq/image/upload/v1650245847/img1_w2nmrq.jpg'

export const AuthLayout = ({ children }: IElementJSX) => {
    const { pathname } = useLocation()
    const isSignUpPage = (pathname === '/auth/sign-up');
    
    return (
        <>
            <NavBarAuth>
                <Link to={`${isSignUpPage ? '/auth/login': '/auth/sign-up'}`} className='button btn-create-account'>
                    { isSignUpPage ?'Login' :'Create Account' }
                    <Icon name='user-add' className='icon-btn' />
                </Link>
            </NavBarAuth>

            <Blob color='rgba(0,0,0,.3)' className='blob-auth left' />
            <Blob color='rgba(0,0,0,.3)' className='blob-auth right' />

            <div className='grid'>
                <div className={`container-img ${ isSignUpPage ? 'order-1': 'order-2'}`}>
                    <img 
                        src={ isSignUpPage ? img1 : img0} 
                        alt="lateral image" />
                </div>
                {children}
            </div>
        </>
    );
};
