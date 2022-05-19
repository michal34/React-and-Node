import './Header.scss';
import { authService } from './../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['app-token']);
    const token = { token: cookies['app-token'] };
    const navigate = useNavigate();

    authService.checkSession(token)
    .then((res) => {
      if (!res.data.success) {
        removeCookie('app-token', {path: '/'});
        navigate('/');
      }
    });

    const logout = () => {
      removeCookie('app-token', {path: '/'});
      authService.logout();
    }
    return(
        <div className="header-container">
          <div className="header-left">
          </div>
          <div className="header-center">
            <h1>Aplikacja do tworzenia planu zajęć</h1>
          </div>
          <div className="header-right">
            <button className="logout-button" onClick={logout} >Wyloguj</button>
          </div>
        </div>
    );
};

export default Header;