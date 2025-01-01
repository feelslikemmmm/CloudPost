import styled from 'styled-components';
import { Column, Row } from '@/styles/layouts/Layout';
import { Input } from '@/styles/layouts/Tag';
import { Font } from '@/styles/layouts/Typography';
import { login } from '@/service/auth_service';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';

const Login = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const onLogin = async (providerName: string) => {
    try {
      await login(providerName).then((data) => {
        const user = data.user;
        const setUserProvider = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        setUser(setUserProvider);
        navigate('/dashboard');
      });
    } catch (err) {
      console.error('로그인 에러', err);
    }
  };

  return (
    <Column width="100%" height="100%" maxWidth="1400px">
      <Row width="100%" height="100%">
        <Column
          width="100%"
          alignItems="center"
          justifyContent="center"
          gridGap="40px"
          paddingTop="100px"
        >
          <Column width="100%" alignItems="center" gridGap="20px">
            <Font fontSize="40px" fontWeight="bold" color="#000">
              CloudPost
            </Font>
            <Font fontSize="20px" color="grey">
              로그인 후 서비스를 이용해보세요
            </Font>
          </Column>
          <Row width="100%" justifyContent="center" padding="40px">
            <GoogleLoginButton onClick={() => onLogin('google')}>
              <GoogleIcon
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google Icon"
              />

              <Font fontWeight="700" fontSize="16px">
                Google Login
              </Font>
            </GoogleLoginButton>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default Login;

const CoustomInput = styled(Input)`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #dcdcdc;
  background: #fff;
  outline: none;
`;

const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 240px; /* 공식 버튼 최대 너비 */
  height: 50px;
  background-color: #ffffff; /* 버튼 배경색 */
  color: #5f6368; /* 버튼 텍스트 색 */
  border: 1px solid #dadce0; /* 버튼 테두리 */
  border-radius: 4px;
  font-size: 16px; /* 텍스트 크기 */
  font-weight: 500; /* 텍스트 굵기 */
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: #f8f9fa;
    box-shadow:
      0 1px 3px rgba(60, 64, 67, 0.3),
      0 4px 8px rgba(60, 64, 67, 0.15); /* 공식 호버 효과 */
  }

  &:focus {
    outline: none;
    box-shadow:
      0 1px 3px rgba(60, 64, 67, 0.3),
      0 4px 8px rgba(60, 64, 67, 0.3); /* 포커스 효과 */
  }

  &:active {
    background-color: #eeeeee;
    box-shadow: none; /* 클릭 효과 */
  }
`;

const GoogleIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
