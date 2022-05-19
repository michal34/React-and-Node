import { authService } from './../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// ODDZIELNY KOMPONENT ROBI SIE ZEBY BYLO CZYSCIEJ

const CheckSession = () => {
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
    return (
        <div></div>
    )
}

export default CheckSession;