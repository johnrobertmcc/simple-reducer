import ListItem from "../ListItem/ListItem";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import { useAppContext } from "../../context/state";
/**
 * Renders the Layout Component
 *
 * @param  {object}  props       The component as props.
 * @param  {object}  props.state The name of the component.
 * @return {Element}             The Layout component.
 */
export default function Layout({ state }) {
  const dispatch = useAppContext();
  const [text, setText] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    dispatch({ type: "ADD", payload: { text } });
    setText("");
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add to-do here"
        />
      </form>
      {state && (
        <ul>
          {state.map((item, i) => {
            return <ListItem item={item} key={i} />;
          })}
        </ul>
      )}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
Layout.propTypes = {
  state: PropTypes.object,
};
