import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResults, getFilteredResults } from "../../asyncActions/results";

import "./form.css";

const Form = () => {
  const [field, setField] = useState("");
  const [conditional, setСonditional] = useState("");
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const resetInputs = () => {
    setField("");
    setСonditional("");
    setInputValue("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (field === "name" && conditional === "equals") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/nameequals/",
          inputValue
        )
      );
    } else if (field === "name" && conditional === "contains") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/namecontains/",
          inputValue
        )
      );
    } else if (field === "name" && conditional === "more") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/namemore/",
          inputValue
        )
      );
    } else if (field === "name" && conditional === "less") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/nameless/",
          inputValue
        )
      );
    }

    if (field === "amount" && conditional === "equals") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/amountequals/",
          inputValue
        )
      );
    } else if (field === "amount" && conditional === "contains") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/amountcontains/",
          inputValue
        )
      );
    } else if (field === "amount" && conditional === "more") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/amountmore/",
          inputValue
        )
      );
    } else if (field === "amount" && conditional === "less") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/amountless/",
          inputValue
        )
      );
    }

    if (field === "distance" && conditional === "equals") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/distanceequals/",
          inputValue
        )
      );
    } else if (field === "distance" && conditional === "contains") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/distancecontains/",
          inputValue
        )
      );
    } else if (field === "distance" && conditional === "more") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/distancemore/",
          inputValue
        )
      );
    } else if (field === "distance" && conditional === "less") {
      dispatch(
        getFilteredResults(
          "http://localhost:8080/api/result/distanceless/",
          inputValue
        )
      );
    }

    resetInputs();
  };

  const onResetHandler = () => {
    dispatch(getResults());

    resetInputs();
  };

  return (
    <form onSubmit={onSubmitHandler} onReset={onResetHandler} className="form">
      <select
        onChange={(e) => setField(e.target.value)}
        value={field}
        className="form-select"
        name=""
        required
      >
        <option value="field">Поле</option>
        <option value="name">Название</option>
        <option value="amount">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <select
        onChange={(e) => setСonditional(e.target.value)}
        value={conditional}
        className="form-select"
        name=""
        required
      >
        <option value="conditional">Условие</option>
        <option value="equals">Равно</option>
        <option value="contains">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="form__input"
        name="argument"
        type="text"
        placeholder="Значение"
        required
      />
      <button className="form__button cancel" type="reset">
        Сброс
      </button>
      <button className="form__button submit" type="submit">
        Фильтр
      </button>
    </form>
  );
};

export default Form;
