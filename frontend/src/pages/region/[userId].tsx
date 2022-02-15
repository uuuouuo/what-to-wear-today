import React from 'react';
import { NextPage } from 'next';
import RegionTemplate from '@/template/region';

interface Props {
  userId: string;
}

const Region: NextPage<Props> = ({ userId }) => {
  return <RegionTemplate userId={userId} />;
};

export const getServerSideProps = async ({ params }) => {
  const data = params.userId;
  return { props: { userId: data } };
};

export default Region;
