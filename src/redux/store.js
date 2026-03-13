// import rootReducer from "./rootReducer";
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { persistStore } from "redux-persist";

// const middlewares = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);

import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger());
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
