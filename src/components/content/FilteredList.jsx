import React from "react";
import style from "./Content.module.css";

export default props => {
  return (
    <div>
      <h3>
        Search Result:<span>{props.filteredItems.length}</span>
      </h3>
      {props.filteredItems.map((t, index) => (
        <FilterItem key={index} t={t} />
      ))}
    </div>
  );
};

const FilterItem = props => {
  return (
    <div className={style.trainingList}>
      <div className={style.trainingItem}>
        <div className={style.trainingInfo}>
          <div className={style.trainingTime}>{props.t.time}</div>
          <div className={style.trainingTitle}>{props.t.title}</div>
        </div>
        <div className={style.trainingDate}>{props.t.date}</div>
      </div>
    </div>
  );
};
