import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../../asyncActions/results";
import {
  removeResultAction,
  setPageResultsAction,
  sortResultsAction,
} from "../../store/actionsCreators";
import { useHttp } from "../../hooks/http.hook";

import deleteSVG from "../../assets/delete.svg";

import "./table.css";

const Table = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);
  const onePageResults = useSelector((state) => state.onePageResults);

  const [sorted, setSorted] = useState(false);
  const request = useHttp();

  useEffect(() => {
    dispatch(getResults());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setPageResultsAction(results));
    // eslint-disable-next-line
  }, [results]);

  const onDeleteResult = (id) => {
    request(`http://localhost:8080/api/result/${id}`, "DELETE")
      .then((res) => console.log(res, "Удаление успешно"))
      .then(dispatch(removeResultAction(id)))
      .catch((err) => console.log(err));
  };

  // Функция сортировки при нажатии на заголовок столбца таблицы

  const sortColumnByParam = (results, param) => {
    setSorted((state) => !state);

    let sortedResults = [];

    if (param === "name" && sorted === false) {
      sortedResults = results.sort((a, b) => (a.name > b.name ? 1 : -1));
      dispatch(sortResultsAction(sortedResults));
    } else if (param === "amount" && sorted === false) {
      sortedResults = results.sort((a, b) => (+a.amount > +b.amount ? 1 : -1));
      dispatch(sortResultsAction(sortedResults));
    } else if (param === "distance" && sorted === false) {
      sortedResults = results.sort((a, b) =>
        +a.distance > +b.distance ? 1 : -1
      );
      dispatch(sortResultsAction(sortedResults));
    }

    if (param === "name" && sorted === true) {
      sortedResults = results.sort((a, b) => (a.name < b.name ? 1 : -1));
      dispatch(sortResultsAction(sortedResults));
    } else if (param === "amount" && sorted === true) {
      sortedResults = results.sort((a, b) => (+a.amount < +b.amount ? 1 : -1));
      dispatch(sortResultsAction(sortedResults));
    } else if (param === "distance" && sorted === true) {
      sortedResults = results.sort((a, b) =>
        +a.distance < +b.distance ? 1 : -1
      );
      dispatch(sortResultsAction(sortedResults));
    }

    dispatch(setPageResultsAction(sortedResults));
  };

  // Пожертвовал правильностью верстки (нельзя в table вставлять посторонние элементы по типу кнопки ) чтобы создать удобные кнопки удаления

  const renderTableRows = (arr) => {
    const rows = arr.map(({ date, name, amount, distance, id }) => {
      return (
        <tr key={id} className="table__row">
          <td className="table__down">{date}</td>
          <td className="table__down name">{name}</td>
          <td className="table__down">{amount}</td>
          <td className="table__down">{distance}</td>
          <button className="table__button">
            <img
              onClick={() => onDeleteResult(id)}
              className="table__svg"
              src={deleteSVG}
              alt="Кнопка удаления результата"
            />
          </button>
        </tr>
      );
    });

    return <tbody className="table__body">{rows}</tbody>;
  };

  return (
    <>
      <h2 className="table-section__title">
        Таблица с реузльтатми по броскам в длину
      </h2>
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__column">Дата</th>
            <th
              onClick={() => sortColumnByParam(results, "name")}
              className="table__column table__column_active"
            >
              Имя
            </th>
            <th
              onClick={() => sortColumnByParam(results, "amount")}
              className="table__column table__column_active"
            >
              Количество
            </th>
            <th
              onClick={() => sortColumnByParam(results, "distance")}
              className="table__column table__column_active"
            >
              Расстояние, м
            </th>
          </tr>
        </thead>
        {renderTableRows(onePageResults)}
      </table>
    </>
  );
};

export default Table;
