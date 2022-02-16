import React from 'react';
import { NextPage } from 'next';
import SetRegionTemplate from '@/template/region';

interface Props {
  userId: string;
}

const SetRegion: NextPage<Props> = ({ userId }) => {
  return <SetRegionTemplate />;
};

export const getServerSideProps = async ({ params }) => {
  const data = params.userId;
  return { props: { userId: data } };
};

export default SetRegion;
