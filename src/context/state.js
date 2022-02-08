import { createContext, useContext } from "react";

const Context = createContext();

export function useAppContext() {
  return useContext(Context);
}

export function ContextWrapper({ dispatch, children }) {
  return <Context.Provider value={dispatch}>{children}</Context.Provider>;
}
export function appReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        state: [
          ...state.state,
          { text: action?.payload?.text, completed: false, id: Date.now() },
        ],
      };

    case "TOGGLE":
      return {
        state: state.state.map((item, idx) => {
          if (item?.id === action?.payload?.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };

    case "RESET":
      return { state: action?.payload };

    default:
      return state;
  }
}
