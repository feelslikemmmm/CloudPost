import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';

export const login = async (providerName: string) => {
  try {
    const authProvider = getProvider(providerName);
    const result = await signInWithPopup(auth, authProvider);
    return result;
  } catch (err) {
    throw new Error('로그인에 실패했습니다.');
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.');
  }
};

const getProvider = (providerName: string) => {
  switch (providerName) {
    case 'google':
      return googleProvider;
    default:
      throw new Error(`not supported provider: ${providerName}`);
  }
};
