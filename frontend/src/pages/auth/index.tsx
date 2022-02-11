import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import type { RootState } from '@/reducers';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

interface Props {
  children: React.ReactChild[];
}

const AuthProvider: NextPage<Props> = ({ children }) => {
  const router = useRouter();
  const { myInfo } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (
      router.pathname.includes('login') ||
      router.pathname.includes('callback') ||
      router.pathname.includes('sginup') ||
      router.pathname.includes('interest') ||
      router.pathname.includes('type')
    )
      return;

    if (!myInfo) router.push('/login');
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
