import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import resultsReducer from "./resultsReducer";

// создание глобального стора redux

export const store = createStore(
  resultsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
