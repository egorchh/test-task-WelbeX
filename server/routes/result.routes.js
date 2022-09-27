const Router = require("express");
const router = new Router();
const resultController = require("../controller/result.controller");

/////// основные роуты

router.post("/result", resultController.createResult);
router.get("/result", resultController.getResults);
router.delete("/result/:id", resultController.deleteResult);

/////// роуты для фильтрации

// для поля Название

router.get("/result/nameequals/:value", resultController.getResultsNameEquals);
router.get(
  "/result/namecontains/:value",
  resultController.getResultsNameContains
);
router.get("/result/namemore/:value", resultController.getResultsNameMore);
router.get("/result/nameless/:value", resultController.getResultsNameLess);

// для поля Количество

router.get(
  "/result/amountequals/:value",
  resultController.getResultsAmountEquals
);
router.get(
  "/result/amountcontains/:value",
  resultController.getResultsAmountContains
);
router.get("/result/amountmore/:value", resultController.getResultsAmountMore);
router.get("/result/amountless/:value", resultController.getResultsAmountLess);

// для поля Расстояние

router.get(
  "/result/distanceequals/:value",
  resultController.getResultsDistanceEquals
);
router.get(
  "/result/distancecontains/:value",
  resultController.getResultsDistanceContains
);
router.get(
  "/result/distancemore/:value",
  resultController.getResultsDistanceMore
);
router.get(
  "/result/distanceless/:value",
  resultController.getResultsDistanceLess
);

module.exports = router;
