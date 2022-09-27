import AddResultForm from "../AddResultFrom/addResultForm";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";

import "./app.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Таблица рекордов</h1>
      <AddResultForm />
      <Form />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
