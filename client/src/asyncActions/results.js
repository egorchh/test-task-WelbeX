import { useHttp } from "../hooks/http.hook";
import {
  getAllResultsAction,
  getResultsFilterByFormAction,
} from "../store/actionsCreators";

// создаем запросы к базе данных

export const getResults = () => (dispatch) => {
  const request = useHttp();

  request("http://localhost:8080/api/result").then((json) =>
    dispatch(getAllResultsAction(json))
  );
};

// запросы на фильтрацию

export const getFilteredResults = (url, value) => (dispatch) => {
  const request = useHttp();

  request(`${url}${value}`).then((json) =>
    dispatch(getResultsFilterByFormAction(json))
  );
};
