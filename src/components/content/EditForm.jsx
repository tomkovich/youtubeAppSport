import React, { useState, useEffect } from "react";
import style from "./Content.module.css";

export default props => {
  const [item, setItem] = useState(props.currentItem);

  let handleInputChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setItem(props.currentItem)
  }, [props])

  return (
    <div className={style.formTraining}>
      <h2>Edit Form</h2>
      <form
      onSubmit={event => {
        event.preventDefault();
        props.updateItem(item, item.id);
      }}
      >
        <div className={style.formGroup}>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            type="text"
            name="time"
            value={item.time}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            type="text"
            name="date"
            value={item.date}
            onChange={handleInputChange}
          />
        </div>
        <button className={style.save}>Update</button>
      </form>
      <button className={style.cancel}>Cancel</button>
    </div>
  );
};
