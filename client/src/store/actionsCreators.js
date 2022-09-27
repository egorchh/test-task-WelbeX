import {
  GET_RESULTS,
  CREATE_RESULT,
  REMOVE_RESULT,
  SET_PAGE_RESULTS,
  CHANGE_CURRENT_PAGE,
  FILTER_RESULTS,
  SORT_RESULTS,
} from "./resultsReducer";

export const getAllResultsAction = (payload) => ({
  type: GET_RESULTS,
  payload,
});

export const createResultAction = (payload) => ({
  type: CREATE_RESULT,
  payload,
});

export const removeResultAction = (payload) => ({
  type: REMOVE_RESULT,
  payload,
});

export const setPageResultsAction = (payload) => ({
  type: SET_PAGE_RESULTS,
  payload,
});

export const changeCurrentPageAction = (payload) => ({
  type: CHANGE_CURRENT_PAGE,
  payload,
});

// action creator для сортировки

export const sortResultsAction = (payload) => ({
  type: SORT_RESULTS,
  payload,
});

// action creator для фильтрации

export const getResultsFilterByFormAction = (payload) => ({
  type: FILTER_RESULTS,
  payload,
});
