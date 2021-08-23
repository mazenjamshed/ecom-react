import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../Assets/img/4.1 crown.svg';
const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/shop'>
          Contact
        </Link>
        <Link className='option' to='/sign-in'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
