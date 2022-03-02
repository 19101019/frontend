import { createStore } from "redux";

const intialState = {};

export default () => {
  const store = createStore((state = intialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  });

  return store;
};
