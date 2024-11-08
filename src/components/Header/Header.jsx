import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center sticky top-0 bg-cyan-300 gap-10 p-10 text-black font-bold text-2xl'>
            <NavLink  to='/'>Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;