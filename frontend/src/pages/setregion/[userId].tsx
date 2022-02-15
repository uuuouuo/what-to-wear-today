import React from 'react';
import { NextPage } from 'next';
import SetRegionTemplate from '@/template/setregion';

interface Props {
  userId: string;
}

const SetRegion: NextPage<Props> = ({ userId }) => {
  console.log(userId);
  return <SetRegionTemplate userId={userId}></SetRegionTemplate>;
};

export const getServerSideProps = async ({ params }) => {
  const data = params.userId;
  return { props: { userId: data } };
};

export default SetRegion;
