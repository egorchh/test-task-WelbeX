const db = require("../db");

class resultController {
  // основные контроллеры

  async createResult(req, res) {
    const { date, name, amount, distance } = req.body;
    const newResult = await db.query(
      "INSERT INTO results (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING *",
      [date, name, amount, distance]
    );
    res.json(newResult.rows[0]);
  }

  async getResults(req, res) {
    const results = await db.query("SELECT * from results");
    res.json(results.rows);
  }

  async deleteResult(req, res) {
    const id = req.params.id;
    const result = await db.query("DELETE FROM results where id = $1", [id]);
    res.json(result.rows[0]);
  }

  // контроллеры фильтрации

  // по полю Название

  async getResultsNameEquals(req, res) {
    const value = req.params.value;
    const results = await db.query("select * from results where name = $1", [
      value,
    ]);
    res.json(results.rows);
  }

  async getResultsNameContains(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where name like '%' || $1 || '%'",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsNameMore(req, res) {
    const value = req.params.value;
    const results = await db.query("select * from results where name > $1", [
      value,
    ]);
    res.json(results.rows);
  }

  async getResultsNameLess(req, res) {
    const value = req.params.value;
    const results = await db.query("select * from results where name < $1", [
      value,
    ]);
    res.json(results.rows);
  }

  // по полю Количество

  async getResultsAmountEquals(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where amount::text = $1",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsAmountContains(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where amount::text like '%' || $1 || '%'",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsAmountMore(req, res) {
    const value = req.params.value;
    const results = await db.query("select * from results where amount > $1", [
      value,
    ]);
    res.json(results.rows);
  }

  async getResultsAmountLess(req, res) {
    const value = req.params.value;
    const results = await db.query("select * from results where amount < $1", [
      value,
    ]);
    res.json(results.rows);
  }

  // по полю Расстояние

  async getResultsDistanceEquals(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where distance::text = $1",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsDistanceContains(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where distance::text like '%' || $1 || '%'",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsDistanceMore(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where distance > $1",
      [value]
    );
    res.json(results.rows);
  }

  async getResultsDistanceLess(req, res) {
    const value = req.params.value;
    const results = await db.query(
      "select * from results where distance < $1",
      [value]
    );
    res.json(results.rows);
  }
}

module.exports = new resultController();
