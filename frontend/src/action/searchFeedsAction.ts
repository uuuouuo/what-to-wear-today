export const LOAD_SEARCH_FEEDS_REQUEST = 'LOAD_SEARCH_FEEDS_REQUEST';
export const LOAD_SEARCH_FEEDS_SUCCESS = 'LOAD_SEARCH_FEEDS_SUCCESS';
export const LOAD_SEARCH_FEEDS_FAILURE = 'LOAD_SEARCH_FEEDS_FAILURE';

export const loadSearchFeedsRequest = (searchUrl: string) => ({
  type: LOAD_SEARCH_FEEDS_REQUEST,
  searchUrl,
});

export const loadSearchFeedsSuccess = () => ({
  type: LOAD_SEARCH_FEEDS_SUCCESS,
});

export const loadSearchFeedsFailure = () => ({
  type: LOAD_SEARCH_FEEDS_FAILURE,
});
