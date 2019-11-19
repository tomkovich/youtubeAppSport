import React from "react";
import style from "./Content.module.css";

export default props => {
  return (
    <div className={style.trainingItem}>
      <div className={style.itemID}>{props.id + 1}</div>
      <div className={style.trainingInfo}>
        <div className={style.trainingTime}>{props.c.time}</div>
        <div className={style.trainingTitle}>{props.c.title}</div>
      </div>
      <div className={style.trainingDate}>{props.c.date}</div>
      <div
        className={style.deleteItem}
        onClick={() => props.deleteItem(props.id)}
      ></div>
      <div className={style.editItem} onClick={() => props.editTraining(props.id)}></div>
    </div>
  );
};
