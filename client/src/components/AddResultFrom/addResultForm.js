import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";

import { createResultAction } from "../../store/actionsCreators";

import "./addResultForm.css";

const AddResultForm = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [distance, setDistance] = useState("");

  const request = useHttp();
  const dispatch = useDispatch();

  const onCreateResult = (e) => {
    e.preventDefault();

    const newResult = {
      date,
      name,
      amount,
      distance,
    };

    request(
      "http://localhost:8080/api/result",
      "POST",
      JSON.stringify(newResult)
    )
      .then((res) => console.log(res, "Отправка успешна"))
      .then(dispatch(createResultAction(newResult)))
      .catch((err) => console.log(err));

    setDate("");
    setName("");
    setAmount("");
    setDistance("");
  };

  return (
    <form className="addform" onSubmit={onCreateResult}>
      <h3 className="addform__title">Добавьте новый результат в таблицу</h3>
      <div className="addform__wrapper">
        <input
          className="addform__input"
          name="date"
          id="date"
          type="number"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Введите год"
          required
        />
        <input
          className="addform__input"
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя человека"
          required
        />
        <input
          className="addform__input"
          name="amount"
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Количество"
          required
        />
        <input
          className="addform__input"
          name="distance"
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Дистанция"
          required
        />
        <button className="addform__button submit" type="submit">
          Создать
        </button>
      </div>
    </form>
  );
};

export default AddResultForm;
