import React, { useState } from "react";
import style from "./Content.module.css";

export default props => {
  let state = {
    title: "",
    time: "",
    date: ""
  };

  let [data, setData] = useState(state);

  let onInputChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  let onFormSubmit = e => {
    e.preventDefault();
    props.addTraining(data);
    setData({
      ...data,
      title: "",
      time: "",
      date: ""
    });
  };

  return (
    <div className={style.formTraining}>
      <form onSubmit={onFormSubmit}>
        <div className={style.formGroup}>
          <input
            value={data.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            value={data.time}
            type="text"
            placeholder="Time"
            name="time"
            onChange={onInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            value={data.date}
            type="text"
            placeholder="Date"
            name="date"
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className={style.save}>
          Save
        </button>
      </form>
      <button className={style.cancel}>Cancel</button>
    </div>
  );
};
