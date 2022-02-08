import "./App.css";
import { useReducer, useEffect, useRef } from "react";
import { appReducer } from "./context/state";
import Layout from "./components/Layout";
import { ContextWrapper } from "./context/state";

export default function ToDosApp() {
  const [{ state }, dispatch] = useReducer(appReducer, { state: [] });
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      const rawData = localStorage.getItem("data");
      dispatch({ type: "RESET", payload: JSON.parse(rawData) });
      didMount.current = true;
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <ContextWrapper dispatch={dispatch}>
      <Layout state={state} dispatch={dispatch} />
    </ContextWrapper>
  );
}
