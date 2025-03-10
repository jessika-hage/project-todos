import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faTrashAlt, 
  faShoppingCart, 
  faCog, 
  faHeart, 
  faListUl, 
  faCheckCircle, 
  faBriefcase, 
  faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

import { themes } from "reducers/themes";
import todos from "reducers/todos";

import { Theme } from "./components/Main/Theme";
import { TaskPage } from "./components/Main/TaskPage";

library.add(faTrashAlt, faShoppingCart, faCog, faHeart, faListUl, faCheckCircle, faBriefcase, faLaptopHouse);

const reducer = combineReducers({
  themes: themes.reducer, 
  todos: todos.reducer
});

const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
};

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});



export const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <TaskPage />
      </Theme>
    </Provider>
  )
};
