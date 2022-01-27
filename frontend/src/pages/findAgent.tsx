import React from 'react';

interface Props {
  userAgent: string;
  header: any;
}

const findAgent = ({ userAgent }: Props) => {
  console.log('index page', userAgent);

  return (
    <>
      <div>Hello World!</div>
    </>
  );
};

export const getServerSideProps = ({ req }: any) => {
  const userAgent = req.headers['user-agent'];
  console.log('req : ', req);
  return { props: { userAgent, header: req.headers } };
};

export default findAgent;
