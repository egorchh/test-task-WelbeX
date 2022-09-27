const initialState = {
  results: [],
  onePageResults: [],
  currentPage: 1,
};

// создаем reducer

export const GET_RESULTS = "GET_RESULTS";
export const CREATE_RESULT = "CREATE_RESULT";
export const REMOVE_RESULT = "REMOVE_RESULT";
export const SET_PAGE_RESULTS = "SET_PAGE_RESULTS";
export const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
export const FILTER_RESULTS = "FILTER_RESULTS";
export const SORT_RESULTS = "SORT_RESULTS";

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return { ...state, results: action.payload };

    case CREATE_RESULT:
      return { ...state, results: [...state.results, action.payload] };

    case REMOVE_RESULT:
      return {
        ...state,
        results: state.results.filter((item) => item.id !== action.payload),
      };

    case SET_PAGE_RESULTS:
      if (state.currentPage === 1) {
        return { ...state, onePageResults: action.payload.slice(0, 5) };
      } else {
        return {
          ...state,
          onePageResults: action.payload.slice(
            (state.currentPage - 1) * 5,
            state.currentPage * 5
          ),
        };
      }

    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case FILTER_RESULTS:
      return { ...state, results: action.payload };

    case SORT_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default resultsReducer;
