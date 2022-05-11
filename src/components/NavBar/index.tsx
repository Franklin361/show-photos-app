import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "../../assets";
import { useCallback, useEffect, useState, useContext } from 'react';
import { IElementJSX } from "../../interfaces";
import { NameIcon } from "../../interfaces";
import "./style.scss";
import { AuthContext } from '../../context/AuthContext/index';

export const NavBarAuth = ({ children }: IElementJSX) => {
    return (
        <nav className='navigation'>
            <div className='logo'>
                <span className='move-text'>Show</span>
                <span className='special-text'>
                    <span>Photos</span>
                    <Icon name='camera' />
                </span>
            </div>
            {children}
        </nav>
    );
};

export const NavBarHome = () => {
    return (
        <div className='container-nav'>
            <ButtonMenu />
            <nav className='navigation-home'>
                <LogoMenu />
                <ContainerLinksNavBar />
            </nav>
        </div>
    );
};

const ContainerLinksNavBar = () => {
    const {setLogout} = useContext(AuthContext);

    return (
        <div className='section-links'>
            <LinkMenu to='/home/' icon='home' label='Home' />
            <LinkMenu to='/home/my-favorites' icon='heart' label='My favorites' />
            <LinkMenu to='/home/perfil' icon='image' label='My photos' />
            <button className='item-link' onClick={setLogout}>
                <Icon name='log-out' className='icon-menu' />
                <span>Log out</span>
            </button>
        </div>
    );
};

const LogoMenu = () => {
    return (
        <div className='logo'>
            <span>SP</span>
            <Icon name='camera' className='icon-logo' />
        </div>
    );
};

const LinkMenu = ({ label, to, icon }: { label: string; to: string; icon: NameIcon }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }: any) => "item-link " + (isActive ? "active-link" : "")}>
            <Icon name={icon} className='icon-menu' />
            <span>{label}</span>
        </NavLink>
    );
};

const ButtonMenu = () => {
    const [checked, setChecked] = useState(false);
    const { pathname } = useLocation();
    const handleChange = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked),[] );

    useEffect(() => {
        if (!checked && pathname !== "/") setChecked(true);
    }, [pathname]);

    return (
        <>
            <input
                type='checkbox'
                id='menu'
                className='input-menu none'
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor='menu' className='btn-menu'>
                <Icon name='burger' className='icon-logo' />
            </label>
        </>
    );
};
