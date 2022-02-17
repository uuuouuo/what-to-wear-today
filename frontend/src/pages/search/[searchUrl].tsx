import React from 'react';
import { NextPage } from 'next';
import SearchedPage from '@/template/search/searchedPage';
import wrapper from '@/store/configureStore';
import { END } from 'redux-saga';
import { loadSearchFeedsRequest } from '@/action/searchFeedsAction';
import axios from 'axios';

const Searched: NextPage = ({ searchUrl }) => {
  console.log(searchUrl);
  axios.get(`http://localhost:8080${searchUrl}`).then((res) => console.log(res));
  return <SearchedPage />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params, query }) => {
      let data = `/${params.searchUrl}?`;

      if (query.tag) {
        data += `&tag=${encodeURIComponent(query.tag.toString())}`;
      }
      if (query.startDate) {
        data += `&startDate=${query.startDate}`;
      }
      data += `&endDate=${query.endDate}`;
      if (query.region) {
        data += `&region=${query.region}`;
      }
      if (query.temperature) {
        data += `&temperature=${query.temperature}`;
      }

      if (typeof data !== 'string') return { props: { searchUrl: null } };

      store.dispatch(loadSearchFeedsRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { searchUrl: data } };
    },
);

export default Searched;
