import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default () => {

  return (
    <div className={style.header}>
      <div className={style.itemWrap + " " + style.home}>
        <NavLink exact to="/" activeClassName={style.activeLink}>All</NavLink>
      </div>
      <div className={style.itemWrap}>
        <NavLink to="/strength" className={style.strenghts} activeClassName={style.activeLink}>
          Strengths
        </NavLink>
      </div>
      <div className={style.itemWrap}>
        <NavLink to="/cardio" className={style.cardio} activeClassName={style.activeLink}>Cardio</NavLink>
      </div>
    </div>
  );
};
