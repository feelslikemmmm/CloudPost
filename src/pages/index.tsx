import Header from '@/components/Header';
import { useUserStore } from '@/store/useUserStore';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const IndexPage = () => {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      <Navigate to="/dashboard" replace />;
    }
  }, [user]);

  return (
    <>
      <Header />
    </>
  );
};

export default IndexPage;
