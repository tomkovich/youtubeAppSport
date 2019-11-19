import React, { useState, useEffect } from "react";
import style from "./Content.module.css";
import Preloader from "./Preloader";

export const Home = ({ items }) => {
  let data = {
    items: []
  };

  const [trainings, setTrainings] = useState(data.items);

  useEffect(() => {
    items.items.total > 0 && setTrainings(items.items.items);
  }, [items.items.items, items.items.total]);

  return (
    <div>
      {trainings.length === 0 ? <Preloader /> : trainings.map(item => (
        <Item key={item.sys.id} item={item.fields} />
      ))}
    </div>
  );
};

const Item = ({ item }) => {

  // Окончания для слов в зависимости от числа
  let declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  let getMin = num => {
    let c = (num + "").split(".")[1];
    return c;
  };

  let year = new Date(item.date).getFullYear();
  let day = new Date(item.date).getDate();
  day = day > 0 && day < 10 ? `0${day}` : `${day}`;
  let month = new Date(item.date).getMonth();
  let fullDate = `${day}.${month}.${year}`;

  return (
    <div className={style.trainingList}>
      <div className={style.trainingItem}>
        <div className={style.trainingInfo}>
          <div className={style.trainingTime}>
            {Math.trunc(item.time) +
              " " +
              declOfNum(Math.trunc(item.time), ["час", "часа", "часов"]) +
              " " +
              getMin(item.time) +
              " " +
              declOfNum(Math.trunc(getMin(item.time)), [
                "минута",
                "минуты",
                "минут"
              ])}
          </div>
          <div className={style.trainingTitle}>{item.title}</div>
        </div>
        <div className={style.trainingDate}>{fullDate}</div>
      </div>
    </div>
  );
};
