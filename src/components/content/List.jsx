import React from "react";
import style from "./Content.module.css";
import Item from "./Item";

export default props => {
  return (
    props.list.length > 0 && (
      <div className={style.trainingList}>
        {props.list.map((c, index) => (
          <Item
            editTraining={props.editTraining}
            deleteItem={props.deleteItem}
            key={index}
            c={c}
            id={index}
          />
        ))}
      </div>
    )
  );
};
