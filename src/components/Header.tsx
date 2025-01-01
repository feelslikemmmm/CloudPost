import { logout } from '@/service/auth_service';
import { useUserStore } from '@/store/useUserStore';
import { Row } from '@/styles/layouts/Layout';
import { Button } from '@/styles/layouts/Tag';
import { Font } from '@/styles/layouts/Typography';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    logout().then(() => {
      clearUser();
    });
  };

  return (
    <Row
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      maxWidth="1400px"
      height="96px"
    >
      <Row width="100%">
        <Font fontSize="24px" fontWeight="bold">
          CloudPost
        </Font>
      </Row>
      <Row>
        {user ? (
          <Button style={{ cursor: 'pointer' }} onClick={handleLogout}>
            <Font fontSize="16px">Logout</Font>
          </Button>
        ) : (
          <Button style={{ cursor: 'pointer' }} onClick={handleLogin}>
            <Font fontSize="16px">Login</Font>
          </Button>
        )}
      </Row>
    </Row>
  );
};

export default Header;
