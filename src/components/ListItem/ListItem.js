import PropTypes from "prop-types";
import styles from "./ListItem.module.css";
import { useAppContext } from "../../context/state";
/**
 * Renders the ListItem Component
 *
 * @param  {object}  props       The component as props.
 * @param  {object}  props.item The name of the component.
 * @return {Element}             The ListItem component.
 */
export default function ListItem({ item }) {
  const dispatch = useAppContext();
  return (
    <li
      className={styles.listItem}
      onClick={() =>
        dispatch({
          type: "TOGGLE",
          payload: { id: item?.id },
        })
      }
    >
      <p className={item?.completed ? styles.complete : styles.incomplete}>
        {item?.text}
      </p>
      <button
        className={styles.delete}
        onClick={() => dispatch({ type: "DELETE", payload: { id: item?.id } })}
      >
        delete
      </button>
    </li>
  );
}
ListItem.propTypes = {
  item: PropTypes.object,
};
