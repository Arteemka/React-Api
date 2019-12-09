export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const END_PAGE = "END_PAGE";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const ITEMS_FETCH_LOAD_MORE = "ITEMS_FETCH_LOAD_MORE";
export const ITEMS_FETCH_DATA_ERROR = "ITEMS_FETCH_DATA_ERROR";

export const getData = (page, name, bool) => {
  return dispatch => {
    dispatch(setPage(page));
    return fetch(
      `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&page=${page}&place_name=${name}}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.response.total_pages > 100) {
          dispatch(setEndPage(100));
        } else {
          dispatch(setEndPage(data.response.total_pages));
        }
        if (bool === "pagination") {
          dispatch(getItems(data.response.listings));
        } else {
          dispatch(loadMore(data.response.listings));
        }
      })
      .catch(() => dispatch(fetchDataError(true)));
  };
};

export const getItems = items => {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    payload: items
  };
};

export const setEndPage = endPage => {
  return {
    type: END_PAGE,
    payload: endPage
  };
};

export const setPage = page => {
  return {
    type: CURRENT_PAGE,
    payload: page
  };
};

export const loadMore = items => {
  return {
    type: ITEMS_FETCH_LOAD_MORE,
    payload: items
  };
};

export const fetchDataError = error => {
  return {
    type: ITEMS_FETCH_DATA_ERROR,
    payload: error
  };
};
